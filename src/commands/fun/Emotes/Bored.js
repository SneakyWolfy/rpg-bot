const SubCommand = require("../../../utils/SubCommand");
const { Nekos } = require("../../../models/apis");

class Bored extends SubCommand {
  constructor() {
    super({ description: "So boring..." });
  }

  async action(interaction) {
    const embed = await Nekos.bored(interaction.user);

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Bored();
