import readUsers from './readUsers.js';
import readPasswords from './readPasswords.js';

const users = readUsers();
const passwords = readPasswords();

const state = { users, passwords };

export default state;
