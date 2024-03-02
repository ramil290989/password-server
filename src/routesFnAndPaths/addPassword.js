import { authentikateToken } from '../token.js';
import state from '../state.js';
import files from '../files.js';
import writeData from '../writeData.js';

const addPassword = (request, response) => {
  try {
    const { users, passwords } = state;
    const passwordsFile = files.passwords();
    const token = request.headers.authorization;
    const username = authentikateToken(token);
    console.log(`${username} add new password`);
    const user = users.find((u) => u.name === username);
    const newPassword = request.body;
    const id = passwords.length > 0 ? passwords[passwords.length - 1].id + 1 : 1;
    newPassword.userId = user.id;
    newPassword.id = id;
    passwords.push(newPassword);
    writeData(passwords, passwordsFile);
    response.send(newPassword);
  } catch (e) {
    response
      .status(403)
      .send({ error: 'Forbidden' });
  }
};

const addPasswordPath = '/addpassword';

export { addPassword, addPasswordPath };
