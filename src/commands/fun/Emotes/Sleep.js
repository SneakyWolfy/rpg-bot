const SubCommand = require("../../../utils/SubCommand");

class Sleep extends SubCommand {
  constructor() {
    super({ description: "zzz" });
  }
}

module.exports = new Sleep();
