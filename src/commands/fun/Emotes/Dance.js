const SubCommand = require("../../../utils/SubCommand");
const { Nekos } = require("../../../models/apis");

class Dance extends SubCommand {
  constructor() {
    super({ description: "Break a sweat" });
  }

  async action(interaction) {
    const embed = await Nekos.dance(interaction.user);

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Dance();
