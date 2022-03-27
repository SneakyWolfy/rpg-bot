const SubCommand = require("../../../utils/SubCommand");

class Blush extends SubCommand {
  constructor() {
    super({ description: "Turn red" });
  }
}

module.exports = new Blush();
