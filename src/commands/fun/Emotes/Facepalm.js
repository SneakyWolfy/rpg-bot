const SubCommand = require("../../../utils/SubCommand");
const { Nekos } = require("../../../models/apis");

class Facepalm extends SubCommand {
  constructor() {
    super({ description: "Cover your eyes in disappointment" });
  }

  async action(interaction) {
    const embed = await Nekos.facepalm(interaction.user);

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Facepalm();
