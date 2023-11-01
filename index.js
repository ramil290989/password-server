import express from 'express';
import router from './src/routes.js';
import readUsers from './src/readUsers.js';
import readPasswords from './src/readPasswords.js';
import writeUser from './src/writeUser.js';

const users = readUsers();
const passwords = readPasswords();

const PORT = 3000;

const state = {
  users,
  passwords,
};

const start = () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({extended: false}));
  app.use('/api', router);
  app.listen(PORT, () =>{
    console.log(`Server works on port ${PORT}`);
 });
};

export default start;
