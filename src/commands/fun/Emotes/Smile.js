const SubCommand = require("../../../utils/SubCommand");
const { Nekos } = require("../../../models/apis");

class Smile extends SubCommand {
  constructor() {
    super({ description: ":)" });
  }

  async action(interaction) {
    const embed = await Nekos.smile(interaction.user);

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Smile();
