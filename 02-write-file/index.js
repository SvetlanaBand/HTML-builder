const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "text.txt");
let writeableStream = fs.createWriteStream(filePath);
const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
const rl = readline.createInterface({ input, output });
console.log("Привет!");
rl.on("line", (text) => {
  if (text === "exit") {
    console.log("До встречи!");
    rl.close();
  }
  if (text != "exit") {
    writeableStream.write(text + `\n`, (error) => {
      if (error) throw error;
    });
  }
});
rl.on("SIGINT", () => {
  console.log("До встречи!");
  rl.close();
});
