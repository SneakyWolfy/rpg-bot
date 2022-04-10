const SubCommand = require("../../../utils/SubCommand");
const { Reminder } = require("../../../models/reminderModel");
const { fetchUser } = require("../../../utils//helpers");

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
      console.log(remind);
      await remind.save();
      await interaction.reply("Reminder created!");
      // console.log(remind);
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
