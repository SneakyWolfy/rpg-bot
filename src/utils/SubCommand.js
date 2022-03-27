const Command = require("./Command");

class SubCommand extends Command {
  constructor(options = {}) {
    super(options);
  }

  async execute(interaction) {
    await this.action(interaction);
  }

  async action() {}
}

module.exports = SubCommand;
