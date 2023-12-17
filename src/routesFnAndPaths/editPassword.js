import { authentikateToken } from '../token.js';
import state from '../state.js';
import writePasswords from '../writePasswords.js';

const editPassword = (request, response) => {
  try {
    const { passwords } = state;
    const token = request.headers.authorization;
    const username = authentikateToken(token);
    console.log(`${username} edit password`);
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
};

const editPasswordPath = '/editpassword';

export { editPassword, editPasswordPath };
