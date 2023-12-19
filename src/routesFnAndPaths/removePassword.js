import { authentikateToken } from '../token.js';
import state from '../state.js';
import writePasswords from '../writePasswords.js';

const removePassword = (request, response) => {
  try {
    const { passwords } = state;
    const token = request.headers.authorization;
    const username = authentikateToken(token);
    console.log(`${username} remove password`);
    const { id } = request.body;
    const index = passwords.findIndex((p) => p.id === id);
    passwords.splice(index, 1);
    writePasswords(passwords);
    response.sendStatus(200);
  } catch (e) {
    response
      .status(403)
      .send({ error: 'Forbidden' });
  }
};

const removedPasswordPath = '/removepassword';

export { removePassword, removedPasswordPath };
