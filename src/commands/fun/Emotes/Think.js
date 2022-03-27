const SubCommand = require("../../../utils/SubCommand");

class Think extends SubCommand {
  constructor() {
    super({ description: "Its time to think!" });
  }
}

module.exports = new Think();
