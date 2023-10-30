import path from 'path';
import fs from 'fs';

const readPasswords = () => {
  const pathToPasswords = path.resolve('./data/passwords.json');
  const passwords = fs.readFileSync(pathToPasswords, 'utf-8');
  const result = JSON.parse(passwords);
  return result;
};

export default readPasswords;
