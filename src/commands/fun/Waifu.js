const Command = require("../../utils/Command");
const { Nekos } = require("../../models/apis");
// eslint-disable-next-line no-unused-vars
const { Interaction } = require("discord.js");

class Waifu extends Command {
  constructor() {
    super({
      description: "Sends a Random Neko",
    });
  }

  /**
   * @param {Interaction} interaction;
   */
  async action(interaction) {
    const embed = await Nekos.getWaifu();

    if (!embed) return;

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Waifu();
