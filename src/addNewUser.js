import state from './state.js';
import writeUsers from './writeUsers.js';

const { users } = state;

const addNewUser = (newUser) => {
  users.push(newUser);
  writeUsers(users);
};

export default addNewUser;
