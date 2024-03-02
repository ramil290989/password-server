import state from '../state.js';
import { generateToken } from '../token.js';
import files from '../files.js';
import writeData from '../writeData.js';

const register = (request, response) => {
  const { users } = state;
  const usersFile = files.users();
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
    users.push(newUser);
    writeData(users, usersFile);
    const token = generateToken(username);
    response.send({ username, token });
  }
};

const registernPath = '/register';

export { register, registernPath };
