const SubCommand = require("../../../utils/SubCommand");
const { Nekos } = require("../../../models/apis");

class Cry extends SubCommand {
  constructor() {
    super({ description: "Let out some tears" });
  }

  async action(interaction) {
    const embed = await Nekos.cry(interaction.user);

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Cry();
