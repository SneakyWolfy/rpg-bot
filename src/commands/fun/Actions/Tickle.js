const SubCommand = require("../../../utils/SubCommand");
const { Nekos } = require("../../../models/apis");

class Tickle extends SubCommand {
  constructor() {
    super({ description: "Tickle where it's funny" });

    this.data.addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The user to tickle")
        .setRequired(true)
    );
  }

  async action(interaction) {
    const embed = await Nekos.tickle(
      interaction.user,
      interaction.options.getUser("target")
    );

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Tickle();
