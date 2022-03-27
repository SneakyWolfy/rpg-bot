const SubCommand = require("../../../utils/SubCommand");
const { Nekos } = require("../../../models/apis");

class Laugh extends SubCommand {
  constructor() {
    super({ description: "HA HA HA" });
  }

  async action(interaction) {
    const embed = await Nekos.laugh(interaction.user);

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Laugh();
