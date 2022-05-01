// eslint-disable-next-line no-unused-vars
const { CommandInteraction } = require("discord.js");
const Command = require("../../utils/Command");

class Help extends Command {
  constructor() {
    super({
      description: "View what is being played",
    });
  }

  /**
   * @param {CommandInteraction} interaction;
   */
  async action(interaction) {
    interaction.reply("Not implemented");
  }
}

module.exports = new Help();
