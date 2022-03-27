const SubCommand = require("../../../utils/SubCommand");

class Baka extends SubCommand {
  constructor() {
    super({ description: "Call someone a baka!" });

    this.data.addUserOption((option) =>
      option.setName("target").setDescription("The baka").setRequired(true)
    );
  }
}

module.exports = new Baka();
