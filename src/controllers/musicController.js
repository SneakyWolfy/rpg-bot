const musicModel = require("../models/musicModel");

exports.joinVoice = musicModel.joinVoice;

exports.play = async (interaction, query) => {
  if (!musicModel.isInVoice(interaction)) return;

  const queue = musicModel.createQueue(interaction);
  musicModel.joinVoice(interaction, queue);

  await interaction.deferReply();

  const track = await musicModel.searchFirst(interaction, query);
  if (!track)
    return await interaction.followUp({
      content: `❌ | Track **${query}** not found!`,
    });

  queue.play(track);

  return await interaction.followUp({
    content: `⏱️ | Loading track **${track.title}**!`,
  });
};
