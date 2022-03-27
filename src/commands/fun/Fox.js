const Command = require("../../utils/Command");
const { Fox: FoxAPI } = require("../../models/apis");
// eslint-disable-next-line no-unused-vars
const { Interaction } = require("discord.js");

class Fox extends Command {
  constructor() {
    super({
      description: "Sends a Random Fox",
    });
  }

  /**
   * @param {Interaction} interaction;
   */
  async action(interaction) {
    const embed = await FoxAPI.getFox();
    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Fox();
