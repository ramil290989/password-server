import state from '../state.js';
import { authentikateToken } from '../token.js';
import files from '../files.js';
import writeData from '../writeData.js';

const changeUserPassword = (request, response) => {
  try {
    const { users } = state;
    const usersFile = files.users();
    const token = request.headers.authorization;
    const username = authentikateToken(token);
    console.log(`${username} change user password`);
    const { password, newPassword } = request.body;
    const user = users.find((u) => u.name === username);
    if (user.password !== password) {
      response.sendStatus(401);
    } else {
      user.password = newPassword;
      writeData(users, usersFile);
      response.sendStatus(200);
    }
  } catch (e) {
    response.sendStatus(403);
  }
};

const changeUserPasswordPath = '/changeuserpassword';

export { changeUserPassword, changeUserPasswordPath };
