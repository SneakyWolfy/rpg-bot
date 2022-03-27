const SubCommand = require("../../../utils/SubCommand");

class Wave extends SubCommand {
  constructor() {
    super({ description: "Wave to someone" });

    this.data.addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The user to wave at")
        .setRequired(true)
    );
  }
}

module.exports = new Wave();
