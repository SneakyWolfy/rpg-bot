const SubCommand = require("../../../utils/SubCommand");
const { Nekos } = require("../../../models/apis");

class Happy extends SubCommand {
  constructor() {
    super({ description: "Be super happy" });
  }

  async action(interaction) {
    const embed = await Nekos.happy(interaction.user);

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Happy();
