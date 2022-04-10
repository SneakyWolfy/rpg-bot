const SubCommand = require("../../../utils/SubCommand");

class Kiss extends SubCommand {
  constructor() {
    super({ description: "Kiss someone" });

    this.data.addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The user to kiss")
        .setRequired(true)
    );

    this.data.addBooleanOption((option) =>
      option.setName("mention-user").setDescription("Mention the user")
    );
  }
}

module.exports = new Kiss();
