const SubCommand = require("../../../utils/SubCommand");

class Bored extends SubCommand {
  constructor() {
    super({ description: "So boring..." });
  }
}

module.exports = new Bored();
