import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const directory = path.join(__dirname, 'files');

  try {
    const readDir = await fs.readdir(directory);
    console.log('files:', readDir);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();
