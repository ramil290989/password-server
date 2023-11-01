import express from 'express';
import { HttpError } from 'http-errors';
import { generateToken } from './token.js';

const { Unauthorized, Conflict } = HttpError;

const router = express.Router();

router.post('/login', (request, response) => {
  const body = request.body;
  console.log(body);
  response.send('token');
});

export default router;
