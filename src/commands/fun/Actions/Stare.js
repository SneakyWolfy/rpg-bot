const SubCommand = require("../../../utils/SubCommand");

class Stare extends SubCommand {
  constructor() {
    super({ description: "Enter a staring contest" });

    this.data.addUserOption((option) =>
      option.setName("target").setDescription("Your opponent").setRequired(true)
    );
  }
}

module.exports = new Stare();
