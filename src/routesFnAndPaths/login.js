import state from '../state.js';
import { generateToken } from '../token.js';

const login = (request, response) => {
  const { users } = state;
  const { username, password } = request.body;
  const user = users.find((u) => u.name === username);
  if (user && password === user.password) {
    const token = generateToken(user.name);
    response.send({ username, token });
  } else {
    response
      .status(401)
      .send({ error: 'Unauthorized' });
  }
};

const loginPath = '/login';

export { login, loginPath };
