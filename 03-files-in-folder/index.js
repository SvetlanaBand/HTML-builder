const { readdir} = require('fs/promises');
const { stat } = require('fs/promises');
const path = require('path');
(async () =>{
  try {
    const filePath = path.join(__dirname, 'secret-folder');
    const files = await readdir(filePath, { withFileTypes: true });
    for (const file of files) {
      if (file.isFile()) {
        const stats = await stat(path.join(filePath, file.name));
        console.log(`${(file.name.split('.')[0])} - ${path.extname(file.name)} - ${stats.size}bt`);
      }
    }
  } catch (error) {
    console.log(`Error: ${error}`);
  }
})();

