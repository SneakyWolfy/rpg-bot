const SubCommand = require("../../../utils/SubCommand");
const { Nekos } = require("../../../models/apis");

class Thumbsup extends SubCommand {
  constructor() {
    super({ description: "Give someone a thumbsup" });

    this.data.addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The user to thumbsup")
        .setRequired(true)
    );
  }

  async action(interaction) {
    const embed = await Nekos.thumbsup(
      interaction.user,
      interaction.options.getUser("target")
    );

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Thumbsup();
