const SubCommand = require("../../../utils/SubCommand");
const { Nekos } = require("../../../models/apis");

class Slap extends SubCommand {
  constructor() {
    super({ description: "Give someone a big slap" });

    this.data.addUserOption((option) =>
      option.setName("target").setDescription("The user to slap")
    );
  }

  async action(interaction) {
    const embed = await Nekos.slap(
      interaction.user,
      interaction.options.getUser("target")
    );

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Slap();
