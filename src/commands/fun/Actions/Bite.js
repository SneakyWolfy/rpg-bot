const SubCommand = require("../../../utils/SubCommand");

class Bite extends SubCommand {
  constructor() {
    super({ description: "Bite someone" });

    this.data.addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The user to nom")
        .setRequired(true)
    );
  }
}

module.exports = new Bite();
