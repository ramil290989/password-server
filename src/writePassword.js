import path from 'path';
import fs from 'fs';

const writePasswords = (passwords) => {
  const passwordsString = JSON.stringify(passwords);
  const pathToPasswords = path.resolve('./data/passwords.json');
  fs.writeFileSync(pathToPasswords, passwordsString);
};

export default writePasswords;
