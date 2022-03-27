const SubCommand = require("../../../utils/SubCommand");

class Smile extends SubCommand {
  constructor() {
    super({ description: ":)" });
  }
}

module.exports = new Smile();
