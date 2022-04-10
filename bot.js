const commandController = require("./src/controllers/commandController");

const client = require("./src/models/Client");

const fs = require("node:fs");

const { BOT_TOKEN: token } = process.env;

const commandCategories = fs
  .readdirSync("./src/commands")
  .filter((dirName) => !dirName.includes("."));

const commandFiles = [];

for (const category of commandCategories) {
  const categoryCommands = fs
    .readdirSync(`./src/commands/${category}`)
    .map((commandName) => {
      return {
        name: commandName,
        dirName: category + "/",
      };
    });
  commandFiles.push(...categoryCommands);
}

for (const file of commandFiles) {
  const command = require(`./src/commands/${file.dirName}${file.name}`);
  client.commands.set(command.data.name, command);
}

// When the client is ready, run this code (only once)
client.once("ready", () => {
  commandController.init();
});

client.on("error", console.error);
client.on("warn", console.warn);

// Login to Discord with your client's token
client.login(token);
