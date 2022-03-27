const SubCommand = require("../../../utils/SubCommand");

class Shrug extends SubCommand {
  constructor() {
    super({ description: "Shrug it off" });
  }
}

module.exports = new Shrug();
