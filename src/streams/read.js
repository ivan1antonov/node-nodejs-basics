import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const pathFile = path.join(__dirname, 'files', 'fileToRead.txt');

    const readFile = fs.createReadStream(pathFile);

    readFile.on('data', (chunk) => {
      process.stdout.write(chunk);
    });

    readFile.on('error', (error) => {
      console.error(error)
    });
};

await read();