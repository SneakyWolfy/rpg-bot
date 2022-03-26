//? Everything in ".env" will be stored into "process.env"
require("dotenv").config();

const commandController = require("./src/controllers/commandController");

const fs = require("node:fs");
const { BOT_TOKEN: token } = process.env;
const { Client, Collection, Intents } = require("discord.js");

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection();

const commandFiles = fs
  .readdirSync("./src/commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./src/commands/${file}`);
  client.commands.set(command.data.name, command);
}

// When the client is ready, run this code (only once)
client.once("ready", () => {
  commandController.init(client);
});

// Login to Discord with your client's token
client.login(token);
