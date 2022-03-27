const Command = require("../utils/Command");
const { waitTime: time } = require("../../config");
const { wait } = require("../utils/helpers.js");

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

    const messages = await this._fetchMessages(
      interaction.channel,
      amount,
      user
    );
    interaction.channel.bulkDelete(messages);

    await interaction.reply(
      `Successfully purged ${Array.from(messages).length} messages`
    );
    await wait(time);
    await interaction.deleteReply();
  }

  async _fetchMessages(channel, limit, user) {
    const allMessages = [];
    let lastId;
    let acc = 0;

    while (true) {
      const options = { limit: 100 };
      if (lastId) options.before = lastId;

      const messages = await channel.messages.fetch(options);
      const messagesFiltered = messages.filter((m) => {
        if (user && m.author.id !== user.id) return false;
        if (acc >= limit) return false;
        acc++;
        return true;
      });

      allMessages.push(...messagesFiltered.values());
      lastId = messages.last().id;

      if (messages.size != 100 || allMessages.length >= limit) {
        break;
      }
    }
    return allMessages;
  }
}

module.exports = new Purge();
