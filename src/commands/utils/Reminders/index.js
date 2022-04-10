const SuperCommand = require("../../../utils/SuperCommand");

class Reminder extends SuperCommand {
  constructor() {
    super({ description: "List of features for reminders", __dirname });
  }

  async before(interaction, subCommand) {
    console.log(subCommand.name);
  }
}

module.exports = new Reminder();
