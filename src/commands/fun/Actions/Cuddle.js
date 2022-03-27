const SubCommand = require("../../../utils/SubCommand");
const { Nekos } = require("../../../models/apis");

class Cuddle extends SubCommand {
  constructor() {
    super({ description: "Want to snuggle?" });

    this.data.addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The user to snuggle with")
        .setRequired(true)
    );
  }

  async action(interaction) {
    const embed = await Nekos.cuddle(
      interaction.user,
      interaction.options.getUser("target")
    );

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Cuddle();
