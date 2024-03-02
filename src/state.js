import files from './files.js';
import readData from './readData.js';

const usersFile = files.users();
const passwordFile = files.passwords();

const users = readData(usersFile);
const passwords = readData(passwordFile);

const state = { users, passwords };

export default state;
