const SubCommand = require("../../../utils/SubCommand");

class Baka extends SubCommand {
  constructor() {
    super({ description: "Call someone a baka!" });

    this.data.addUserOption((option) =>
      option.setName("target").setDescription("The baka").setRequired(true)
    );
    this.data.addBooleanOption((option) =>
      option.setName("mention-user").setDescription("Mention the user")
    );
  }
}

module.exports = new Baka();
