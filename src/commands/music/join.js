const Command = require("../../utils/Command");
const AppError = require("../../utils/AppError");
const musicController = require("../../controllers/musicController");
// eslint-disable-next-line no-unused-vars
const { Interaction } = require("discord.js");

class Join extends Command {
  constructor() {
    super({
      description: "Joins your vc",
    });
  }

  /**
   * @param {Interaction} interaction;
   */
  async action(interaction) {
    const voiceState = interaction.member.voice;

    const voiceChannel = voiceState.channel;

    if (!voiceChannel)
      AppError("Invalid State", "You must be in a voice channel");

    musicController.joinVoice(voiceChannel);

    interaction.reply("Joined voice channel");
  }
}

module.exports = new Join();
