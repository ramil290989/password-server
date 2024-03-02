import { authentikateToken } from '../token.js';
import state from '../state.js';
import files from '../files.js';
import writeData from '../writeData.js';

const editPassword = (request, response) => {
  try {
    const { passwords } = state;
    const passwordsFile = files.passwords();
    const token = request.headers.authorization;
    const username = authentikateToken(token);
    console.log(`${username} edit password`);
    const { id, values } = request.body;
    const password = passwords.find((p) => p.id === id);
    Object.keys(values).forEach((key) => {
      password[key] = values[key];
    });
    writeData(passwords, passwordsFile);
    response.sendStatus(200);
  } catch (e) {
    response
      .status(403)
      .send({ error: 'Forbidden' });
  }
};

const editPasswordPath = '/editpassword';

export { editPassword, editPasswordPath };
