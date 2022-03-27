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
  }
}

module.exports = new Pat();
