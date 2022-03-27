const SubCommand = require("../../../utils/SubCommand");

class Cuddle extends SubCommand {
  constructor() {
    super({ description: "Want to snuggle?" });

    this.data.addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The user to snuggle with")
        .setRequired(true)
    );
  }
}

module.exports = new Cuddle();
