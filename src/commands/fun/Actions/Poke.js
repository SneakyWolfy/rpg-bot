const SubCommand = require("../../../utils/SubCommand");

class Poke extends SubCommand {
  constructor() {
    super({ description: "Boop" });

    this.data.addUserOption((option) =>
      option.setName("target").setDescription("The user to poke")
    );
  }
}

module.exports = new Poke();
