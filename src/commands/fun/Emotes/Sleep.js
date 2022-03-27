const SubCommand = require("../../../utils/SubCommand");
const { Nekos } = require("../../../models/apis");

class Sleep extends SubCommand {
  constructor() {
    super({ description: "zzz" });
  }

  async action(interaction) {
    const embed = await Nekos.sleep(interaction.user);

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Sleep();
