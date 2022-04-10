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

    this.data.addBooleanOption((option) =>
      option.setName("mention-user").setDescription("Mention the user")
    );
  }
}

module.exports = new Feed();
