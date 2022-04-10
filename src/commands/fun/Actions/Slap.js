const SubCommand = require("../../../utils/SubCommand");

class Slap extends SubCommand {
  constructor() {
    super({ description: "Give someone a big slap" });

    this.data.addUserOption((option) =>
      option.setName("target").setDescription("The user to slap")
    );

    this.data.addBooleanOption((option) =>
      option.setName("mention-user").setDescription("Mention the user")
    );
  }
}

module.exports = new Slap();
