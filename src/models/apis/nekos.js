const axios = require("axios").default;
const { MessageEmbed } = require("discord.js");

const Nekos = axios.create({
  baseURL: "https://nekos.best/api/v2/",
});

const buildEmbed = (data, title) =>
  new MessageEmbed()
    .setTitle(title)
    .setImage(data.url)
    .setURL(data.source_url)
    .setFooter({ text: `Created by ${data.artist_name}` });

exports.getKitsune = async () => {
  const res = await Nekos.get("/kitsune");

  const data = res.data.results[0];

  return buildEmbed(data, "Found a Kitsune!");
};

exports.getNeko = async () => {
  const res = await Nekos.get("/neko");

  const data = res.data.results[0];

  return buildEmbed(data, "Found a Neko!");
};

exports.getWaifu = async () => {
  const res = await Nekos.get("/waifu");

  const data = res.data.results[0];

  return buildEmbed(data, "Found a Waifu!");
};

const getAction = async (name) => {
  const res = await Nekos.get(`/${name}`);

  return res.data.results[0];
};

const buildActionEmbed = (data, string) => {
  const embed = new MessageEmbed()
    .setImage(data.url)
    .setFooter({ text: `Source: ${data.anime_name}` });

  return { embed, content: string };
};

exports.baka = async (user, target) => {
  const data = await getAction("baka");
  return buildActionEmbed(data, `${user} has baka'd ${target}`);
};

exports.bite = async (user, target) => {
  const data = await getAction("bite");
  return buildActionEmbed(data, `${user} has bitten ${target}`);
};

exports.blush = async (user) => {
  const data = await getAction("blush");
  return buildActionEmbed(data, `${user} blushes`);
};

exports.bored = async (user) => {
  const data = await getAction("bored");
  return buildActionEmbed(data, `${user} is board`);
};

exports.cry = async (user) => {
  const data = await getAction("cry");
  return buildActionEmbed(data, `${user} cries`);
};

exports.cuddle = async (user, target) => {
  const data = await getAction("cuddle");
  return buildActionEmbed(data, `${user} cuddles with ${target}`);
};

exports.dance = async (user) => {
  const data = await getAction("dance");
  return buildActionEmbed(data, `${user} gets a move on`);
};

exports.facepalm = async (user) => {
  const data = await getAction("facepalm");
  return buildActionEmbed(
    data,
    `${user} cannot believe what they have witnessed`
  );
};

exports.feed = async (user, target) => {
  const data = await getAction("feed");
  return buildActionEmbed(data, `${user} feeds ${target}`);
};

exports.happy = async (user) => {
  const data = await getAction("happy");
  return buildActionEmbed(data, `${user} is in high spirits`);
};

exports.highfive = async (user, target) => {
  const data = await getAction("highfive");
  return buildActionEmbed(data, `${user} highfives ${target}`);
};

exports.hug = async (user, target) => {
  const data = await getAction("hug");
  return buildActionEmbed(data, `${user} hugs ${target}`);
};

exports.kiss = async (user, target) => {
  const data = await getAction("kiss");
  return buildActionEmbed(data, `${user} kisses ${target}`);
};

exports.laugh = async (user) => {
  const data = await getAction("laugh");
  return buildActionEmbed(data, `${user} laughs`);
};

exports.pat = async (user, target) => {
  const data = await getAction("pat");
  return buildActionEmbed(data, `${user} pats ${target}`);
};

exports.poke = async (user, target) => {
  const data = await getAction("poke");
  return buildActionEmbed(data, `${user} pokes ${target}`);
};

exports.pout = async (user) => {
  const data = await getAction("pout");
  return buildActionEmbed(data, `${user} pouts`);
};

exports.shrug = async (user) => {
  const data = await getAction("shrug");
  return buildActionEmbed(data, `${user} shrugs`);
};

exports.slap = async (user, target) => {
  const data = await getAction("slap");
  return buildActionEmbed(data, `${user} slaps ${target}`);
};

exports.sleep = async (user) => {
  const data = await getAction("sleep");
  return buildActionEmbed(data, `${user} sleeps zzz`);
};

exports.smile = async (user) => {
  const data = await getAction("smile");
  return buildActionEmbed(data, `${user} smiles`);
};

exports.smug = async (user) => {
  const data = await getAction("smug");
  return buildActionEmbed(data, `${user} is giving off a smug look`);
};

exports.stare = async (user, target) => {
  const data = await getAction("stare");
  return buildActionEmbed(data, `${user} stares at ${target}`);
};

exports.think = async (user) => {
  const data = await getAction("think");
  return buildActionEmbed(data, `${user} is thinking`);
};

exports.thumbsup = async (user, target) => {
  const data = await getAction("thumbsup");
  return buildActionEmbed(data, `${user} is giving ${target} a thumbsup`);
};

exports.tickle = async (user, target) => {
  const data = await getAction("tickle");
  return buildActionEmbed(data, `${user} viciously tickles ${target}`);
};

exports.wave = async (user, target) => {
  const data = await getAction("wave");
  return buildActionEmbed(data, `${user} waves to ${target}`);
};

exports.wink = async (user, target) => {
  const data = await getAction("wink");
  return buildActionEmbed(data, `${user} winks at ${target}`);
};
