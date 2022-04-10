const { Client, Collection, Intents } = require("discord.js");

// Create a new client instance
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES],
});

client.commands = new Collection();

module.exports = client;
