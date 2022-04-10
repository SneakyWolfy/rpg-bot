const fs = require("node:fs");

const cmdPath = "../commands";

const commands = [];
const commandCategories = fs
  .readdirSync(cmdPath)
  .filter((dirName) => !dirName.includes("."));

const commandFiles = [];

const appMeta = new AppMeta();

for (const category of commandCategories) {
  const categoryCommands = fs
    .readdirSync(`${cmdPath}/${category}`)
    .map((commandName) => {
      return {
        name: commandName,
        dirName: category + "/",
      };
    });
  commandFiles.push(...categoryCommands);
}

for (const file of commandFiles) {
  const command = require(`${cmdPath}/${file.dirName}${file.name}`);
  commands.push(command.data.toJSON());
}

class AppMeta {
  categories = [];
  commands = [];

  addCategory(name) {}
}

class CategoryMeta {
  name;
  commands = [];

  constructor(name) {
    this.name = name;
  }
}

class CommandMeta {
  constructor(name) {
    this.name = name;
  }
}
