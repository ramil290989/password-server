import state from '../state.js';
import { authentikateToken } from '../token.js';
import writeUsers from '../writeUsers.js';

const changeUserPassword = (request, response) => {
  try {
    const { users } = state;
    const token = request.headers.authorization;
    const username = authentikateToken(token);
    const { password, newPassword } = request.body;
    const user = users.find((u) => u.name === username);
    if (user.password !== password) {
      response.sendStatus(401);
    } else {
      user.password = newPassword;
      writeUsers(users);
      response.sendStatus(200);
    }
  } catch (e) {
    response.sendStatus(403);
  }
};

const changeUserPasswordPath = '/changeuserpassword';

export { changeUserPassword, changeUserPasswordPath };
