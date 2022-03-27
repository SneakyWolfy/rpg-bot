const Command = require("../../utils/Command");
const { Cat: CatAPI } = require("../../models/apis");
// eslint-disable-next-line no-unused-vars
const { Interaction } = require("discord.js");

class Cat extends Command {
  constructor() {
    super({
      description: "Sends a Random Fox",
    });
  }

  /**
   * @param {Interaction} interaction;
   */
  async action(interaction) {
    const embed = await CatAPI.getCat();

    await interaction.reply({ embeds: [embed] });
  }
}

module.exports = new Cat();
