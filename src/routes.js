import express from 'express';
import { generateToken, authentikateToken } from './token.js';
import state from './state.js';
import addNewUser from './addNewUser.js';
import addNewPassword from './addNewPassword.js';
import writePasswords from './writePasswords.js';

const { users, passwords } = state;

const router = express.Router();

// авторизация
router.post('/login', (request, response) => {
  const { username, password } = request.body;
  const user = users.find((u) => u.name === username);
  if (user && password === user.password) {
    const token = generateToken(user.name);
    response.send({ username, token });
  } else {
    response
      .status(401)
      .send({ error: 'Unauthorized' });
  }
});
// регистрация
router.post('/signin', (request, response) => {
  const { username, password } = request.body;
  const user = users.find((u) => u.name === username);
  if (user) {
    response
      .status(409)
      .send({ error: 'Conflict' });
  } else {
    const id = users.length + 1;
    const newUser = { id, name: username, password };
    addNewUser(newUser);
    const token = generateToken(username);
    response.send({ username, token });
  }
});
// проверка токена запрос паролей
router.get('/data', (request, response) => {
  try {
    const token = request.headers.authorization;
    const username = authentikateToken(token);
    const user = users.find((u) => u.name === username);
    const userPasswords = passwords.filter((password) => password.userId === user.id);
    response.send(userPasswords);
  } catch (e) {
    response
      .status(403)
      .send({ error: 'Forbidden' });
  }
});
// проверка токена добавление нового пароля
router.post('/addpassword', (request, response) => {
  try {
    const token = request.headers.authorization;
    const username = authentikateToken(token);
    const user = users.find((u) => u.name === username);
    const newPassword = request.body;
    const id = passwords.length + 1;
    newPassword.userId = user.id;
    newPassword.id = id;
    addNewPassword(newPassword);
    response.send(newPassword);
  } catch (e) {
    response
      .status(403)
      .send({ error: 'Forbidden' });
  }
});
// изменение пароля
router.post('/changepassword', (request, response) => {
  try {
    const token = request.headers.authorization;
    const username = authentikateToken(token);
    const { id, values } = request.body;
    const password = passwords.find((p) => p.id === id);
    Object.keys(values).forEach((key) => {
      password[key] = values[key];
    });
    writePasswords(passwords);
    response.send(password);
  } catch (e) {
    response
      .status(403)
      .send({ error: 'Forbidden' });
  }
});
// удаление пароля
router.post('/removepassword', (request, response) => {
  try {
    const token = request.headers.authorization;
    const username = authentikateToken(token);
    const { id } = request.body;
    const index = passwords.findIndex((p) => p.id === id);
    passwords.splice(index, 1);
    writePasswords(passwords);
    response.send({ removedPasswordId: id });
  } catch (e) {
    response
      .status(403)
      .send({ error: 'Forbidden' });
  }
});

export default router;
