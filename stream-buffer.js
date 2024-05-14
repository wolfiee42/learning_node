const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/read-file" && req.method === "GET");
  const readableStream = fs.createReadStream(__dirname + "/text/read.txt");

  readableStream.on("data", (buffer) => {
    res.write(buffer);
  });

  readableStream.on("end", () => {
    res.end("The Stream is Over.");
  });

  readableStream.on("error", () => {
    res.end("Unexpected Error Occured During Straming.");
  });

});

server.listen(5006, () => {
  console.log(`server is listening at port 5006`);
});
