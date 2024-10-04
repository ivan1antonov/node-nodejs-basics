import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const currentFile = path.join(__dirname, 'files', 'wrongFilename.txt');
    const newFile = path.join(__dirname, 'files', 'properFilename.md');

    fs.rename(currentFile, newFile, (err) => {
      if(err) throw new Error("FS operation failed");      
    })
};

await rename();