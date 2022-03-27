const SubCommand = require("../../../utils/SubCommand");
const { Nekos } = require("../../../models/apis");

class Shrug extends SubCommand {
  constructor() {
    super({ description: "Shrug it off" });
  }

  async action(interaction) {
    const embed = await Nekos.shrug(interaction.user);

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Shrug();
