const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "text.txt");
let readableStream = fs.createReadStream(filePath);

readableStream.on("data", function (chunk) {
 console.log(chunk.toString());
});

//readableStream.pipe(process.stdout); второй метод
