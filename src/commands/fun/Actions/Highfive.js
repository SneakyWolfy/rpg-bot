const SubCommand = require("../../../utils/SubCommand");

class Highfive extends SubCommand {
  constructor() {
    super({ description: "Highfive with someone" });

    this.data.addUserOption((option) =>
      option.setName("target").setDescription("The person to highfive with")
    );

    this.data.addBooleanOption((option) =>
      option.setName("mention-user").setDescription("Mention the user")
    );
  }
}

module.exports = new Highfive();
