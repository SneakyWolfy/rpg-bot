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
  }
}

module.exports = new Wink();
