import { createHash } from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const fileToHash = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

    const fileStream = fs.createReadStream(fileToHash);

    const hash = createHash('sha256');

    fileStream.on('data', (chunk) => {
      hash.update(chunk);
    });

    fileStream.on('end', () => {
      const resultHash = hash.digest('hex');
      console.log(resultHash);
    })

    fileStream.on('error', (err) => {
      console.error(err);
    })
};

await calculateHash();