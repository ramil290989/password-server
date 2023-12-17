import { authentikateToken } from '../token.js';
import state from '../state.js';

const data = (request, response) => {
  try {
    const { users, passwords } = state;
    const token = request.headers.authorization;
    const username = authentikateToken(token);
    console.log(`${username} fetch data`);
    const user = users.find((u) => u.name === username);
    const userPasswords = passwords.filter((password) => password.userId === user.id);
    response.send(userPasswords);
  } catch (e) {
    response
      .status(403)
      .send({ error: 'Forbidden' });
  }
};

const dataPath = '/data';

export { data, dataPath };
