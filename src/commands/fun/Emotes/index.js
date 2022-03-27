const SuperCommand = require("../../../utils/SuperCommand");
const { Nekos } = require("../../../models/apis");

class Emote extends SuperCommand {
  constructor() {
    super({ description: "List of emotes to perform", __dirname });
  }

  async before(interaction, subCommand) {
    const { content, embed } = await Nekos[subCommand.name](interaction.user);

    await interaction.reply({
      embeds: [embed.setDescription(content)],
    });
  }
}

module.exports = new Emote();
