const fs = require("fs");

// read file
const readText = fs.readFileSync("./text/read.txt", "utf-8");

// write text
const writeText = fs.writeFileSync(
  "./text/read.txt",
  readText + "this is written dynamically"
);
console.log(writeText);
