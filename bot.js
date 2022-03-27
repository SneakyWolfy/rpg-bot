const commandController = require("./src/controllers/commandController");
const fs = require("node:fs");

const { BOT_TOKEN: token } = process.env;
const { Client, Collection, Intents } = require("discord.js");

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection();

const commandCategories = fs
  .readdirSync("./src/commands")
  .filter((dirName) => !dirName.includes("."));

const commandFiles = [];

for (const category of commandCategories) {
  const categoryCommands = fs
    .readdirSync(`./src/commands/${category}`)
    .filter((command) => command.endsWith(".js"))
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
  commandController.init(client);
});

// Login to Discord with your client's token
client.login(token);
