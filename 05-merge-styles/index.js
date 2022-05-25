const fsPromises = require('fs/promises');
const path = require('path');

const pathFile = path.join(__dirname, 'project-dist', 'bundle.css');
const pathStyle = path.join(__dirname, 'styles');
let arr = [];

(async () => {
  const files = await fsPromises.readdir(pathStyle, { withFileTypes: true });

for (let file of files) {
    const pathCurrent = path.join(pathStyle, file.name);
    const fileType = path.extname(pathCurrent);
if (fileType === '.css') {
    let arrItem = await fsPromises.readFile(pathCurrent, file);
    arr.push(arrItem);
}
}
await fsPromises.writeFile(pathFile, arr);
})();



