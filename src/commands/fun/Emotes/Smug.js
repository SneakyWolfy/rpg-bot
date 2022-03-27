const SubCommand = require("../../../utils/SubCommand");
const { Nekos } = require("../../../models/apis");

class Smug extends SubCommand {
  constructor() {
    super({ description: "Let your inner smug loose" });
  }

  async action(interaction) {
    const embed = await Nekos.smug(interaction.user);

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Smug();
