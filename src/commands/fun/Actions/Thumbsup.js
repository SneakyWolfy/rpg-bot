const SubCommand = require("../../../utils/SubCommand");

class Thumbsup extends SubCommand {
  constructor() {
    super({ description: "Give someone a thumbsup" });

    this.data.addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The user to thumbsup")
        .setRequired(true)
    );
  }
}

module.exports = new Thumbsup();
