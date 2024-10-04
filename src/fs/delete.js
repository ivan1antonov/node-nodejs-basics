import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const currentFile = path.join(__dirname, 'files', 'fileToRemove.txt');

  try {
    await fs.rm(currentFile);
    console.log('File was delete');
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await remove();
