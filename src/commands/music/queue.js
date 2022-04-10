const Command = require("../../utils/Command");

// const Voice = require("@discordjs/voice");
// eslint-disable-next-line no-unused-vars
const { CommandInteraction } = require("discord.js");
const musicController = require("../../controllers/musicController");

class Queue extends Command {
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

module.exports = new Queue();
