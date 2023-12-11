import state from '../state.js';
import { authentikateToken, generateToken } from '../token.js';
import writeUsers from '../writeUsers.js';

const changeUserPassword = (request, response) => {
  try {
    const { users } = state;
    const token = request.headers.authorization;
    authentikateToken(token);
    const { username, password } = request.body;
    const user = users.find((u) => u.name === username);
    user.password = password;
    writeUsers(users);
    response.status(200);
  } catch (e) {
    response
      .status(403)
      .send({ error: 'Forbidden' });
  }
};

const changeUserPasswordPath = '/changeuserpassword';

export { changeUserPassword, changeUserPasswordPath };
