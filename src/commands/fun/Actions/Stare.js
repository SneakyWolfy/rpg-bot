const SubCommand = require("../../../utils/SubCommand");
const { Nekos } = require("../../../models/apis");

class Stare extends SubCommand {
  constructor() {
    super({ description: "Enter a staring contest" });

    this.data.addUserOption((option) =>
      option.setName("target").setDescription("Your opponent").setRequired(true)
    );
  }

  async action(interaction) {
    const embed = await Nekos.stare(
      interaction.user,
      interaction.options.getUser("target")
    );

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Stare();
