const SubCommand = require("../../../utils/SubCommand");
const { Nekos } = require("../../../models/apis");

class Blush extends SubCommand {
  constructor() {
    super({ description: "Turn red" });
  }

  async action(interaction) {
    const embed = await Nekos.blush(interaction.user);

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Blush();
