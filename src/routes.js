import express, { response } from 'express';
import { HttpError } from 'http-errors';
import { generateToken } from './token.js';
import state from './state.js';
import addNewUser from './addNewUser.js';

const { Unauthorized, Conflict } = HttpError;
const { users, passwords } = state;

const router = express.Router();

router.post('/login', (request, response) => {
  const { username, password } = request.body;
  const user = users.find((u) => u.name === username);
  if (user && password === user.password) {
    const token = generateToken(user.name);
    response.send({ userId: user.id, token });
  } else {
    response.send(Unauthorized());
  }
});
router.post('/signIn', (request, response) => {
  const { username, password } = request.body;
  const user = users.find((u) => u.name === username);
  if (user) {
    response.send(Conflict());
  } else {
    const id = users.length + 1;
    const newUser = { id, name: username, password };
    addNewUser(newUser);
    const token = generateToken(username);
    response.send({ userId: id, token });
  }
})

export default router;
