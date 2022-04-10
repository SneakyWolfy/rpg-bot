const SubCommand = require("../../../utils/SubCommand");

class Clear extends SubCommand {
  constructor() {
    super({ description: "Clears your reminders (all if not specified)" });
    this.data.addIntegerOption((option) =>
      option.setName("select").setDescription("The reminder to remove")
    );
  }
}

module.exports = new Clear();
