const SubCommand = require("../../../utils/SubCommand");
const { Nekos } = require("../../../models/apis");

class Think extends SubCommand {
  constructor() {
    super({ description: "Its time to think!" });
  }

  async action(interaction) {
    const embed = await Nekos.think(interaction.user);

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Think();
