const { SlashCommandBuilder } = require("@discordjs/builders");

class Command {
  constructor(options = {}) {
    this.name =
      options.name?.toLowerCase() ??
      this.__proto__.constructor.name.toLowerCase();

    this.description = options.description ?? "";

    this.data = new SlashCommandBuilder()
      .setName(this.name)
      .setDescription(this.description);
  }

  async execute(interaction) {
    await this.action(interaction);
  }
}

module.exports = Command;
