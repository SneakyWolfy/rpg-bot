const SubCommand = require("../../../utils/SubCommand");

class Pat extends SubCommand {
  constructor() {
    super({ description: "Give someone a head pat" });

    this.data.addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The user to pat")
        .setRequired(true)
    );

    this.data.addBooleanOption((option) =>
      option.setName("mention-user").setDescription("Mention the user")
    );
  }
}

module.exports = new Pat();
