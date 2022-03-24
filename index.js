//? Everything in ".env" will be stored into "process.env"
require("dotenv").config();

import { Client } from "discord.js";
const client = Client;

const token = process.env.BOT_TOKEN;
