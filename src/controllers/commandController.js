const permissionModel = require("../models/permissionModel");
const errorController = require("./errorController");

let client;

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

exports.init = (_client) => {
  client = _client;
  client.on("interactionCreate", onSlashCommand);
};
