import path from 'path';
import fs from 'fs';

const writeUsers = (users) => {
  const usersString = JSON.stringify(users);
  const pathToUsers = path.resolve('./data/users.json');
  fs.writeFileSync(pathToUsers, usersString);
};

export default writeUsers;
