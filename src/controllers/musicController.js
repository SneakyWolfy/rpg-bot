const musicModel = require("../models/musicModel");
const { MessageActionRow, MessageSelectMenu } = require("discord.js");

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

exports.search = async (interaction, query) => {
  if (!musicModel.isInVoice(interaction)) return;

  const queue = musicModel.createQueue(interaction);
  musicModel.joinVoice(interaction, queue);

  await interaction.deferReply();

  const tracks = (await musicModel.search(interaction, query)).tracks;

  if (tracks.length === 0)
    return await interaction.followUp({
      content: `❌ | Track **${query}** not found!`,
    });

  const options = tracks
    .map((track) => {
      return {
        label: `(${track.duration}) ${track.title}`,
        value: JSON.stringify(track.toJSON()),
      };
    })
    .filter((_, i) => i < 10);

  const row = new MessageActionRow().addComponents(
    new MessageSelectMenu()
      .setCustomId("MUSIC")
      .setPlaceholder("Nothing selected")
      .addOptions(options)
  );

  return await interaction.followUp({
    content: `🔎 | Loading Results for **${query}**!`,
    components: [row],
  });
};

exports.onSelect = async (interaction) => {
  if (!musicModel.isInVoice(interaction)) return;

  await interaction.deferReply();

  const trackStr = interaction.values[0];
  const track = musicModel.createTrackFromString(trackStr);

  const queue = musicModel.createQueue(interaction);
  musicModel.joinVoice(interaction, queue);

  //await queue.play(url);

  await interaction.reply("Playing");
};
