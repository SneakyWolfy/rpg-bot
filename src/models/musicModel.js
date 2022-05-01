const { Player } = require("discord-player");
const AppError = require("../utils/AppError");

const client = require("./Client");

/** @type {Player}*/
const player = new Player(client);

player.on("error", (queue, error) => {
  console.log(
    `[${queue.guild.name}] Error emitted from the queue: ${error.message}`
  );
});
player.on("connectionError", (queue, error) => {
  console.log(
    `[${queue.guild.name}] Error emitted from the connection: ${error.message}`
  );
});

exports.isInVoice = async (interaction) => {
  if (!interaction.member.voice.channelId) {
    await interaction.reply({
      content: "You are not in a voice channel!",
      ephemeral: true,
    });
    return false;
  }

  if (
    interaction.guild.me.voice.channelId &&
    interaction.member.voice.channelId !== interaction.guild.me.voice.channelId
  ) {
    await interaction.reply({
      content: "You are not in my voice channel!",
      ephemeral: true,
    });
    return false;
  }

  return true;
};

exports.joinVoice = async (interaction, queue) => {
  try {
    if (!queue.connection)
      await queue.connect(interaction.member.voice.channel);
  } catch {
    queue.destroy();
    AppError("Error", "Could not join your voice channel");
  }
};

exports.createQueue = (interaction) =>
  player.createQueue(interaction.guild, {
    metadata: { channel: interaction.channel },
  });

exports.search = async (interaction, query) => {
  const tracks = await player.search(query, {
    requestedBy: interaction.user,
  });

  return tracks;
};

exports.searchFirst = async (interaction, query) => {
  const res = await this.search(interaction, query);

  return res.tracks[0];
};

exports.createTrackFromString = (trackStr) => {
  console.log(Player);
  console.log(trackStr);
};
