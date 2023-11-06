import express from 'express';
import { generateToken, authentikateToken } from './token.js';
import state from './state.js';
import addNewUser from './addNewUser.js';

const { users, passwords } = state;

const router = express.Router();

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
router.post('/signIn', (request, response) => {
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
router.get('/data', (request, response) => {
  try {
    const token = request.headers['authorization'];
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


export default router;
