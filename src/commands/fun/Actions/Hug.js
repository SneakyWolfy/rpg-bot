const SubCommand = require("../../../utils/SubCommand");

class Hug extends SubCommand {
  constructor() {
    super({ description: "Bites a user" });

    this.data.addUserOption((option) =>
      option.setName("target").setDescription("The user to nom")
    );

    this.data.addBooleanOption((option) =>
      option.setName("mention-user").setDescription("Mention the user")
    );
  }
}

module.exports = new Hug();
