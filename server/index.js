require("dotenv").config();

async function main() {
  await require("./services/mongoose")();

  require("./services/passport");
  require("./services/express");
}

main();
