const Command = require("../../utils/Command");

class Purge extends Command {
  constructor() {
    super({
      description:
        "Deletes a specified count of messages in a channel (Limit 100)",
    });
    this.data.addIntegerOption((option) =>
      option
        .setName("amount")
        .setDescription("The amount of messages to purge")
        .setRequired(true)
    );
  }

  async action(interaction) {
    const amount = await interaction.options.getInteger("amount");

    const messages = await interaction.channel.messages.fetch({
      limit: amount > 100 ? 100 : amount,
    });

    await messages.forEach((m) => m.delete());
    await interaction.reply(
      `Successfully purged ${Array.from(messages).length} messages`
    );
  }
}

module.exports = new Purge();
