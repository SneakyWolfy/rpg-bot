const Command = require("../utils/Command");

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
    this.data.addUserOption((option) =>
      option.setName("user").setDescription("The targetted user to purge from")
    );
  }

  async action(interaction) {
    const amount = await interaction.options.getInteger("amount");
    const user = await interaction.options.getUser("user");

    console.log(user);

    const messages = await interaction.channel.messages.fetch({
      limit: amount > 100 ? 100 : amount,
    });

    await messages.filter((m) => {
      if (user) return m.author === user;
      return m;
    });
    interaction.channel.bulkDelete(messages);
    await interaction.reply(
      `Successfully purged ${Array.from(messages).length} messages`
    );
  }
}

module.exports = new Purge();
