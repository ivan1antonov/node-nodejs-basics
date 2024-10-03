import fs from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const source = join(__dirname, './files');
  const dest = join(__dirname, './files_copy');
  console.log(source);
  try {
    const srcStat = await fs.stat(source);
    if (!srcStat.isDirectory()) throw new Error('Source is not Directory');
    const destExists = await fs
      .access(dest)
      .then(() => true)
      .catch(() => false);
    if (destExists) {
      throw new Error('FS operation failed');
    }
    await fs.cp(source, dest, { recursive: true });
  } catch (err) {
    console.error('Error occurred:', err.message);
    throw new Error('FS operation failed: ' + err.message);
  }
};

await copy();
