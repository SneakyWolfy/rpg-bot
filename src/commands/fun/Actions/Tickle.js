const SubCommand = require("../../../utils/SubCommand");

class Tickle extends SubCommand {
  constructor() {
    super({ description: "Tickle where it's funny" });

    this.data.addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The user to tickle")
        .setRequired(true)
    );

    this.data.addBooleanOption((option) =>
      option.setName("mention-user").setDescription("Mention the user")
    );
  }
}

module.exports = new Tickle();
