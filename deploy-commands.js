require("dotenv").config();
const { BOT_TOKEN: token } = process.env;
const { clientId, guildId } = require("./config");

const fs = require("node:fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

const commands = [];
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
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: "9" }).setToken(token);

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
