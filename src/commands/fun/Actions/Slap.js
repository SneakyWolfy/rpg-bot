const SubCommand = require("../../../utils/SubCommand");

class Slap extends SubCommand {
  constructor() {
    super({ description: "Give someone a big slap" });

    this.data.addUserOption((option) =>
      option.setName("target").setDescription("The user to slap")
    );
  }
}

module.exports = new Slap();
