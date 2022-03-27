const SubCommand = require("../../../utils/SubCommand");

class Smug extends SubCommand {
  constructor() {
    super({ description: "Let your inner smug loose" });
  }
}

module.exports = new Smug();
