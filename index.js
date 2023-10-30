import readUsers from './src/readUsers.js';
import readPasswords from './src/readPasswords.js';
import writeUser from './src/writeUser.js';

const users = readUsers();
const passwords = readPasswords();

const state = {
  users,
  passwords,
};
