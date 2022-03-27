const axios = require("axios").default;
const key = process.env.CAT_API_KEY;
const { MessageEmbed } = require("discord.js");

const RandomCat = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "x-api-key": key,
  },
});

exports.getCat = async () => {
  const res = await RandomCat.get("images/search");

  const catImage = res.data[0]?.url;

  if (!catImage) throw new Error("Unable to load image");

  const embed = new MessageEmbed()
    .setTitle("You found a cat!")
    .setImage(catImage);

  return embed;
};
