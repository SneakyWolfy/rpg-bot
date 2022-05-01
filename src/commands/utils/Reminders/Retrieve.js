const SubCommand = require("../../../utils/SubCommand");
const mongoose = require("mongoose");
const { Reminder } = require("../../../models/reminderModel");
const { fetchUser } = require("../../../utils//helpers");
const { MessageEmbed } = require("discord.js");
const { Pagination } = require("./pagination");
const { defaultEmbed } = require("../../../utils/embed");

class Retrieve extends SubCommand {
  constructor() {
    super({ description: "Fetches your reminders" });
  }

  async action(interaction) {
    try {
      console.log("Trying to retrieve...");
      const user = await fetchUser(interaction.user.id);
      const reminds = await Reminder.find({ userRef: user._id });

      const [embed, pagination] = this._createMarkup(reminds, interaction.user);
      console.log("Data successfully returned!");

      await interaction.reply({
        embeds: [embed],
        components: [pagination.row],
        ephemeral: true,
      });

      const collector = interaction.channel.createMessageComponentCollector({
        componentType: "BUTTON",
      });

      const collection = new Map([
        ["btnNext", ++pagination.data.curPage],
        ["btnPrevious", --pagination.data.curPage],
        ["btnFirst", 1],
        ["btnLast", pagination.data.numPages],
      ]);

      collector.on("collect", async (i) => {
        pagination.data.curPage = collection.get(i.customId);
        this.updateEmbed(pagination, i);
      });

      collector.on("end", (collected) => {
        console.log(`Collected ${collected.size} interactions.`);
      });
    } catch (err) {
      throw err;
    }
  }

  _createMarkup(data, client) {
    const pagination = new Pagination(data);

    const dataChunked = this.chunk(data, pagination.data.resultsPerPage);
    const embeds = dataChunked.map((content) =>
      this._convertToEmbedFields(content, client)
    );

    pagination.data.embeds = embeds;
    console.log("Data compilation completed!");

    return [embeds[0], pagination];
  }

  _convertToEmbedFields(data, client) {
    const embed = defaultEmbed()
      .setTitle("Your Feed")
      .setDescription("What's been keeping you busy lately?" + "\n\u200b")
      .setTimestamp()
      .setFooter({
        text: client.username,
        iconURL: client.avatarURL(),
      });

    const reminds = data.map((remind) => {
      return {
        name: `Scheduled <t:${Math.floor(
          Date.parse(remind.dateDue) / 1000
        )}:R>`,
        value: `${remind.body}` + "\n\u200b",
        inline: true,
      };
    });
    embed.addFields(...reminds);

    console.log(embed.description);

    return embed;
  }

  async updateEmbed(pagination, i) {
    pagination.generateMarkup(pagination.data);
    await i.update({
      embeds: [pagination.data.embeds[pagination.data.curPage - 1]],
      components: [pagination.row],
      ephemeral: true,
    });
  }

  chunk(array, size) {
    const chunked = [];

    for (let start = 0; start < array.length; start += size) {
      chunked.push(array.slice(start, start + size));
    }
    return chunked;
  }
}

module.exports = new Retrieve();
