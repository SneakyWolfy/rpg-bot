const Command = require("./Command");
const fs = require("fs");
const { Collection } = require("discord.js");

class SuperCommand extends Command {
  #subCommands = new Collection();

  constructor(options = {}) {
    super(options);
    this.path = options.__dirname;

    this.compileSubCommands();
  }

  compileSubCommands() {
    const subCommandNames = fs
      .readdirSync(this.path)
      .filter((subCommand) => subCommand !== "index.js");

    for (const subCommandName of subCommandNames) {
      const subCommand = require(`${this.path}/${subCommandName}`);

      this.data.addSubcommand((cmd) => Object.assign(cmd, subCommand.data));
      this.#subCommands.set(subCommand.name, subCommand);
    }
  }

  async execute(interaction) {
    const subCommandName = interaction.options.getSubcommand();
    const subCommand = this.#subCommands.get(subCommandName);
    if (!subCommand) return;

    let res = await this.before(interaction, subCommand);
    res = await subCommand.execute(interaction, res);
    await this.after(interaction, subCommand, res);
  }

  async before() {}

  async after() {}
}

module.exports = SuperCommand;
