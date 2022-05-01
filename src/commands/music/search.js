const Command = require("../../utils/Command");

// const Voice = require("@discordjs/voice");
// eslint-disable-next-line no-unused-vars
const { Interaction } = require("discord.js");
const musicController = require("../../controllers/musicController");

class Search extends Command {
  constructor() {
    super({
      description: "Searches for a song you can play",
    });

    this.data.addStringOption((option) =>
      option
        .setName("query")
        .setDescription("The audio to play")
        .setRequired(true)
    );
  }

  /**
   * @param {Interaction} interaction;
   */
  async action(interaction) {
    const query = interaction.options.get("query").value;

    await musicController.search(interaction, query);
  }
}

module.exports = new Search();
