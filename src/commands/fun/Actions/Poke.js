const SubCommand = require("../../../utils/SubCommand");
const { Nekos } = require("../../../models/apis");

class Poke extends SubCommand {
  constructor() {
    super({ description: "Boop" });

    this.data.addUserOption((option) =>
      option.setName("target").setDescription("The user to poke")
    );
  }

  async action(interaction) {
    const embed = await Nekos.poke(
      interaction.user,
      interaction.options.getUser("target")
    );

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Poke();
