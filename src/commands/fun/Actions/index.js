const SuperCommand = require("../../../utils/SuperCommand");

class Act extends SuperCommand {
  constructor() {
    super({ description: "List of actions to perform", __dirname });
  }
}

module.exports = new Act();
