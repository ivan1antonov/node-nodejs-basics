import fs from 'fs/promises';
const copy = async () => {
  const source = './files';
  const dest = './files_copy';
      try{
        const srcStat = await fs.stat(source);
        if(!srcStat.isDirectory()) throw new Error("Source is not Directory");
        const destExists = await fs.access(dest).then(() => true).catch(() => false);
        if(destExists){
          throw new Error("FS operation failed"); 
        }
        await fs.cp(source, dest, { recursive: true });
        console.log('Directory was successfully copied!');
      }catch(err){
        console.error("Error occurred:", err.message);
        throw new Error("FS operation failed: " + err.message);      
      }
};

await copy();
