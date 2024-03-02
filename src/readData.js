import path from 'path';
import fs from 'fs';

const readData = (file) => {
  const pathToFile = path.resolve(`./data/${file}`);
  const data = fs.readFileSync(pathToFile, 'utf-8');
  const result = JSON.parse(data);
  return result;
};

export default readData;
