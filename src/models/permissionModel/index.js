const fs = require("fs");

const files = fs
  .readdirSync(__dirname)
  .filter((fileName) => fileName != "index.js");

for (const file of files) {
  const name = file.split(".")[0];

  exports[name] = require(`${__dirname}/${file}`);
}
