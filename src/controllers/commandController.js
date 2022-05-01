const permissionModel = require("../models/permissionModel");
const errorController = require("./errorController");

const client = require("../models/Client");
const musicController = require("../controllers/musicController");

/**
 *
 * @param {Interaction} interaction
 * @returns
 */
const onSlashCommand = async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await permissionModel.validate(interaction, command);
    await command.execute(interaction);
  } catch (error) {
    errorController.handleError(error, interaction);
  }
};

/**
 *
 * @param {Interaction} interaction
 * @returns
 */
const onSelectMenu = async (interaction) => {
  if (!interaction.isSelectMenu()) return;

  console.log(interaction);

  try {
    switch (interaction.customId) {
      case "MUSIC":
        await musicController.onSelect(interaction);
        break;
      default:
        await interaction.reply("Unknown Type");
    }
  } catch (error) {
    errorController.handleError(error, interaction);
  }
};

exports.init = () => {
  client.on("interactionCreate", onSlashCommand);
  client.on("interactionCreate", onSelectMenu);
};
