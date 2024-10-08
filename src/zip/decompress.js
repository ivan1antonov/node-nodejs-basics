import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { createGunzip } from 'zlib';

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const inputFile = path.join(__dirname, 'files', 'archive.gz');
  const outputFile = path.join(__dirname, 'files', 'fileToCompress.txt');

  const readStream = fs.createReadStream(inputFile);
  const gunzip = createGunzip();
  const writeStream = fs.createWriteStream(outputFile);

  readStream.pipe(gunzip).pipe(writeStream);

  writeStream.on('finish', () => {
    console.log('File successfully decompressed to fileToCompress.txt');
  });
};

await decompress();