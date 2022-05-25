const path = require('path');
const fsPromises = require('fs').promises;
const { readdir} = require('fs/promises');
const fromFile = path.join(__dirname, 'files');
const toFile = path.join(__dirname, 'files-copy');
async function copy(from, to)  {
    try {
 let files = await fsPromises.readdir(from);
 console.log(files)
 await fsPromises.mkdir(to, { recursive: true });
 for (let file of files) {
    await fsPromises.copyFile(path.join(from, file), path.join(to, file));
  }
} catch (err) {
    console.log(`Error: ${err}`);
  }
};
copy(fromFile, toFile)