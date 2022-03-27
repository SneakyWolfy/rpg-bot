const SubCommand = require("../../../utils/SubCommand");
const { Nekos } = require("../../../models/apis");

class Wave extends SubCommand {
  constructor() {
    super({ description: "Wave to someone" });

    this.data.addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The user to wave at")
        .setRequired(true)
    );
  }

  async action(interaction) {
    const embed = await Nekos.wave(
      interaction.user,
      interaction.options.getUser("target")
    );

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Wave();
