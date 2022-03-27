//? Everything in ".env" will be stored into "process.env"
require("dotenv").config();

const { ShardingManager } = require("discord.js");
const { BOT_TOKEN: token } = process.env;

const manager = new ShardingManager("./bot.js", { token });

manager.on("shardCreate", (shard) => console.log(`Launched shard ${shard.id}`));

manager.spawn();
