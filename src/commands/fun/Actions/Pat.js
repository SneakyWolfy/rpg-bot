const SubCommand = require("../../../utils/SubCommand");
const { Nekos } = require("../../../models/apis");

class Pat extends SubCommand {
  constructor() {
    super({ description: "Give someone a head pat" });

    this.data.addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The user to pat")
        .setRequired(true)
    );
  }

  async action(interaction) {
    const embed = await Nekos.pat(
      interaction.user,
      interaction.options.getUser("target")
    );

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Pat();
