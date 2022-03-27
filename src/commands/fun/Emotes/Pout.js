const SubCommand = require("../../../utils/SubCommand");
const { Nekos } = require("../../../models/apis");

class Pout extends SubCommand {
  constructor() {
    super({ description: ":<" });
  }

  async action(interaction) {
    const embed = await Nekos.pout(interaction.user);

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Pout();
