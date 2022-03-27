const SubCommand = require("../../../utils/SubCommand");

class Cry extends SubCommand {
  constructor() {
    super({ description: "Let out some tears" });
  }
}

module.exports = new Cry();
