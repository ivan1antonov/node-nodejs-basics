import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const pathFile = path.join(__dirname, 'files', 'fileToWrite.txt');

  const writeFile = fs.createWriteStream(pathFile);

  process.stdin.pipe(writeFile);

  writeFile.on('error', (err) => {
    console.error(err);
  })
};

await write();