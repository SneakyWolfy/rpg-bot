const Command = require("../../utils/Command");

class Ping extends Command {
  constructor() {
    super({
      description: "Pings the users",
    });
  }

  async action(interaction) {
    await interaction.reply("Pong!");
  }
}

module.exports = new Ping();
