import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib'; 

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const inputFile = path.join(__dirname, 'files', 'fileToCompress.txt');
  const outputFile = path.join(__dirname, 'files', 'archive.gz');

  const readStream = fs.createReadStream(inputFile);
  const gzip = createGzip();
  const writeStream = fs.createWriteStream(outputFile);

  readStream.pipe(gzip).pipe(writeStream);

  writeStream.on('finish', () => {
    console.log('File successfully compressed to archive.gz');
  });
};

await compress();