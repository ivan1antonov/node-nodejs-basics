import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const currentFile = path.join(__dirname, 'files', 'fileToRead.txt');

  try {
    const readFile = await fs.readFile(currentFile, { encoding: 'utf-8' });
    console.log(readFile);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();
