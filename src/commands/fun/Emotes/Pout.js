const SubCommand = require("../../../utils/SubCommand");

class Pout extends SubCommand {
  constructor() {
    super({ description: ":<" });
  }
}

module.exports = new Pout();
