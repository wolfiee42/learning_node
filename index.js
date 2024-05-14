const { add, a } = require("./local-1");
const { add: add2, a: a2 } = require("./local-2");

// console.log(add(2, 3, 4));

const path = require("path");
console.log(
  path.parse(
    "/Users/saif/Desktop/coding/nextLevelWebDevelopement/learing-node/index.js"
  )
);
