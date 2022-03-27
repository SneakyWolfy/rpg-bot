const SubCommand = require("../../../utils/SubCommand");

class Dance extends SubCommand {
  constructor() {
    super({ description: "Break a sweat" });
  }
}

module.exports = new Dance();
