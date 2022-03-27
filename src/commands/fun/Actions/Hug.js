const SubCommand = require("../../../utils/SubCommand");
const { Nekos } = require("../../../models/apis");

class Hug extends SubCommand {
  constructor() {
    super({ description: "Bites a user" });

    this.data.addUserOption((option) =>
      option.setName("target").setDescription("The user to nom")
    );
  }

  async action(interaction) {
    const embed = await Nekos.hug(
      interaction.user,
      interaction.options.getUser("target")
    );

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Hug();
