const SubCommand = require("../../../utils/SubCommand");
const { Nekos } = require("../../../models/apis");

class Highfive extends SubCommand {
  constructor() {
    super({ description: "Highfive with someone" });

    this.data.addUserOption((option) =>
      option.setName("target").setDescription("The person to highfive with")
    );
  }

  async action(interaction) {
    const embed = await Nekos.highfive(
      interaction.user,
      interaction.options.getUser("target")
    );

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Highfive();
