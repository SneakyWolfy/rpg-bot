const SubCommand = require("../../../utils/SubCommand");
const { Reminder } = require("../../../models/reminderModel");
const { fetchUser } = require("../../../utils//helpers");
const client = require("../../../models/Client");
const { MessageEmbed } = require("discord.js");

class Add extends SubCommand {
  constructor() {
    super({ description: "Sets a reminder" });

    this.data.addStringOption((option) =>
      option
        .setName("description")
        .setDescription("What do you want to be reminded?")
        .setRequired(true)
    );

    this.data.addStringOption((option) =>
      option
        .setName("time")
        .setDescription(
          "Format in DD/HH/MM (EX: 01:04:22 / In 1 day, 4 hours, 22 minutes)"
        )
        .setRequired(true)
    );
  }

  async action(interaction) {
    try {
      const desc = interaction.options.getString("description");
      const time = this._ParseDate(interaction.options.getString("time"));
      const user = await fetchUser(interaction.user.id);

      console.log(desc, time, user);

      const remind = await Reminder.create({
        userRef: user._id,
        body: desc,
        dateDue: time,
      });

      console.log(Date.parse(time) - Date.now());
      console.log(remind);

      await remind.save();

      setTimeout(() => {
        console.log("This reminder has been closed!");
        const embed = new MessageEmbed()
          .setColor("#36393F")
          .setTitle("Your Reminder is Due!")
          .setDescription(remind.body + "\n\u200b")
          .setTimestamp()
          .setFooter({
            text: interaction.user.username,
            iconURL: interaction.user.avatarURL(),
          });

        client.channels.cache.get(`${interaction.channelId}`).send({
          content: `${interaction.user}`,
          embeds: [embed],
        });
      }, Date.parse(time) - Date.now());

      await interaction.reply("Reminder created!");
    } catch (err) {
      throw err;
    }
  }

  _ParseDate(date) {
    // date in days, hours, minutes
    let [days, hrs, mins] = date.split(":").map((str) => Number(str));

    // convert excess mins to hrs
    if (mins > 60) {
      mins = mins % 60;
      hrs += Math.floor(mins / 60);
    }

    // convert excess hrs to days
    if (hrs > 24) {
      hrs = hrs % 24;
      days += Math.floor(days / 24);
    }

    const adjustedDate = new Date();
    adjustedDate.setDate(adjustedDate.getDate() + days);
    adjustedDate.setHours(adjustedDate.getHours() + hrs);
    adjustedDate.setMinutes(adjustedDate.getMinutes() + mins);

    return adjustedDate;
  }
}

module.exports = new Add();
