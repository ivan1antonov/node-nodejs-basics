import fs from 'node:fs/promises';

const create = async () => {
  const path = './files/fresh.txt';
  const fileExist = async () => {
    try {
      await fs.stat(path);
      return true;
    } catch (err) {
      return false;
    }
  };
  let exist = await fileExist();
  if (!exist) {
    await fs.writeFile(path, 'I am fresh and young');
    console.log('File was create');
  } else {
    throw new Error('FS operation failed');
  }
};

await create();
