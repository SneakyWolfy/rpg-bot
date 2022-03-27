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
  }
}

module.exports = new Tickle();
