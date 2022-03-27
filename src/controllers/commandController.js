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
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
};

exports.init = (_client) => {
  client = _client;
  client.on("interactionCreate", onSlashCommand);
};
