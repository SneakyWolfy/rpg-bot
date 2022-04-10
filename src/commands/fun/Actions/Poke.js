const SubCommand = require("../../../utils/SubCommand");

class Poke extends SubCommand {
  constructor() {
    super({ description: "Boop" });

    this.data.addUserOption((option) =>
      option.setName("target").setDescription("The user to poke")
    );

    this.data.addBooleanOption((option) =>
      option.setName("mention-user").setDescription("Mention the user")
    );
  }
}

module.exports = new Poke();
