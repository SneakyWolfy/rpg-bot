const SubCommand = require("../../../utils/SubCommand");
const { Nekos } = require("../../../models/apis");

class Feed extends SubCommand {
  constructor() {
    super({ description: "Feed someone" });

    this.data.addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The user to nom")
        .setRequired(true)
    );
  }

  async action(interaction) {
    const embed = await Nekos.feed(
      interaction.user,
      interaction.options.getUser("target")
    );

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Feed();
