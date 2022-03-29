const Command = require("../../utils/Command");

// const Voice = require("@discordjs/voice");
// eslint-disable-next-line no-unused-vars
const { Interaction } = require("discord.js");
const musicController = require("../../controllers/musicController");

class Play extends Command {
  constructor() {
    super({
      description: "Joins your vc",
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

    await musicController.play(interaction, query);
  }
}

module.exports = new Play();
