const SubCommand = require("../../../utils/SubCommand");
const { Nekos } = require("../../../models/apis");

class Baka extends SubCommand {
  constructor() {
    super({ description: "Call someone a baka!" });

    this.data.addUserOption((option) =>
      option.setName("target").setDescription("The baka").setRequired(true)
    );
  }

  async action(interaction) {
    const embed = await Nekos.baka(
      interaction.user,
      interaction.options.getUser("target")
    );

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Baka();
