const SubCommand = require("../../../utils/SubCommand");

class Stare extends SubCommand {
  constructor() {
    super({ description: "Enter a staring contest" });

    this.data.addUserOption((option) =>
      option.setName("target").setDescription("Your opponent").setRequired(true)
    );

    this.data.addBooleanOption((option) =>
      option.setName("mention-user").setDescription("Mention the user")
    );
  }
}

module.exports = new Stare();
