const SubCommand = require("../../../utils/SubCommand");
const { Nekos } = require("../../../models/apis");

class Wink extends SubCommand {
  constructor() {
    super({ description: "Wink at someone" });

    this.data.addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The user to wink to")
        .setRequired(true)
    );
  }

  async action(interaction) {
    const embed = await Nekos.wink(
      interaction.user,
      interaction.options.getUser("target")
    );

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Wink();
