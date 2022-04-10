const SubCommand = require("../../../utils/SubCommand");

class Retrieve extends SubCommand {
  constructor() {
    super({ description: "Fetches your reminders" });
  }
}

module.exports = new Retrieve();
