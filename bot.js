const commandController = require("./src/controllers/commandController");
const musicModel = require("./src/models/musicModel");
const fs = require("node:fs");
const server = require("./server");

const { BOT_TOKEN: token } = process.env;
const { Client, Collection, Intents } = require("discord.js");

// Create a new client instance
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES],
});
client.commands = new Collection();

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
client.once("ready", async () => {
  await server.init();
  commandController.init(client);
  musicModel.setClient(client);
});

// so connect here

// Login to Discord with your client's token
client.login(token);
