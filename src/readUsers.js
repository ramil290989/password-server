import path from 'path';
import fs from 'fs';

const readUsers = () => {
  const pathToUsers = path.resolve('./data/users.json');
  const users = fs.readFileSync(pathToUsers, 'utf-8');
  const result = JSON.parse(users);
  return result;
};

export default readUsers;
