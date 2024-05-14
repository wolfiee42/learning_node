const fs = require("fs");

const readText = fs.readFile("./text/read.txt", "utf-8", (err, data) => {
  if (err) {
    throw Error("Error reading document.");
  }

  fs.writeFile("./text/read.txt", data, "utf-8", (err) => {
    if (err) {
      throw Error("Error writing text document. ");
    }
  });
});

console.log("writing asynchronously");