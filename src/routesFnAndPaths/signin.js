import state from '../state.js';
import { generateToken } from '../token.js';
import addNewUser from '../addNewUser.js';

const signin = (request, response) => {
  const { users } = state;
  const { username, password } = request.body;
  console.log(`${username} register`);
  const user = users.find((u) => u.name === username);
  if (user) {
    response
      .status(409)
      .send({ error: 'Conflict' });
  } else {
    const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    const newUser = { id, name: username, password };
    addNewUser(newUser);
    const token = generateToken(username);
    response.send({ username, token });
  }
};

const signinPath = '/signin';

export { signin, signinPath };
