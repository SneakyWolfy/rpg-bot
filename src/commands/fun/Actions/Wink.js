const SubCommand = require("../../../utils/SubCommand");

class Wink extends SubCommand {
  constructor() {
    super({ description: "Wink at someone" });

    this.data.addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The user to wink to")
        .setRequired(true)
    );

    this.data.addBooleanOption((option) =>
      option.setName("mention-user").setDescription("Mention the user")
    );
  }
}

module.exports = new Wink();
