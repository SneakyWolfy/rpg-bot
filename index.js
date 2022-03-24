//? Everything in ".env" will be stored into "process.env"
require("dotenv").config();

const discord = require("discord.js");
const client = discord.Client;

const token = process.env.BOT_TOKEN;
