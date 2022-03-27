const axios = require("axios").default;
const { MessageEmbed } = require("discord.js");

const RandomFox = axios.create({
  baseURL: "https://randomfox.ca/floof/",
});

exports.getFox = async () => {
  const res = await RandomFox.get();
  const foxImage = res.data.image;

  const embed = new MessageEmbed()
    .setTitle("You found a fox!")
    .setImage(foxImage);

  return embed;
};
