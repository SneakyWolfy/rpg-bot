const SubCommand = require("../../../utils/SubCommand");

class Feed extends SubCommand {
  constructor() {
    super({ description: "Feed someone" });

    this.data.addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The user to nom")
        .setRequired(true)
    );
  }
}

module.exports = new Feed();
