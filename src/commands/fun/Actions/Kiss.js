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
  }
}

module.exports = new Kiss();
