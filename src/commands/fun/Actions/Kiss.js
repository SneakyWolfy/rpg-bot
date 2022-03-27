const SubCommand = require("../../../utils/SubCommand");
const { Nekos } = require("../../../models/apis");

class Kiss extends SubCommand {
  constructor() {
    super({ description: "Kiss someone" });

    this.data.addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The user to kiss")
        .setRequired(true)
    );
  }

  async action(interaction) {
    const embed = await Nekos.kiss(
      interaction.user,
      interaction.options.getUser("target")
    );

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Kiss();