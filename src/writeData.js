import path from 'path';
import fs from 'fs';

const writeData = (data, file) => {
  const dataString = JSON.stringify(data);
  const pathToFile = path.resolve(`./data/${file}`);
  fs.writeFileSync(pathToFile, dataString);
};

export default writeData;
