const Command = require("./Command");

class SubCommand extends Command {
  constructor(options = {}) {
    super(options);
  }

  async execute(interaction) {
    await this.action(interaction);
  }
}

module.exports = SubCommand;
