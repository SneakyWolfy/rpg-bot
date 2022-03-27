const SubCommand = require("../../../utils/SubCommand");

class Laugh extends SubCommand {
  constructor() {
    super({ description: "HA HA HA" });
  }
}

module.exports = new Laugh();
