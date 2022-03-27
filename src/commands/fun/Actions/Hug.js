const SubCommand = require("../../../utils/SubCommand");

class Hug extends SubCommand {
  constructor() {
    super({ description: "Bites a user" });

    this.data.addUserOption((option) =>
      option.setName("target").setDescription("The user to nom")
    );
  }
}

module.exports = new Hug();
