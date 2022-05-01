const SuperCommand = require("../../../utils/SuperCommand");
const { Nekos } = require("../../../models/apis");

class Act extends SuperCommand {
  constructor() {
    super({ description: "List of actions to perform", __dirname });
  }

  async before(interaction, subCommand) {
    const target = interaction.options.getUser("target");
    const willMentionUser =
      interaction.options.getBoolean("mention-user") ?? false;

    const { content, embed } = await Nekos[subCommand.name](
      interaction.user,
      target
    );

    if (willMentionUser) {
      await interaction.reply({
        content,
        embeds: [
          embed.setDescription(`${interaction.user} used ${subCommand.name}!`),
        ],
      });
    } else {
      await interaction.reply({
        embeds: [
          embed
            .setDescription(content)
            .setTitle(`${interaction.user.username} used ${subCommand.name}!`),
        ],
      });
    }
  }
}

module.exports = new Act();
