const { MessageEmbed } = require("discord.js");

const buildError = (error) =>
  new MessageEmbed()
    .setTitle(error?.title ?? "Application Error")
    .setDescription(error.message);

async function operationalError(error, interaction) {
  const embed = buildError(error);

  await interaction.reply({ embeds: [embed] });
}

exports.handleError = async (error, interaction) => {
  if (error.isOperational) {
    await operationalError(error, interaction);
    return;
  }

  await interaction.reply({
    content: "There was an error while executing this command!",
    ephemeral: true,
  });
};
