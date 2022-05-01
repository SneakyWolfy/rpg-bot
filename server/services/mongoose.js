const mongoose = require("mongoose");

async function connectToDatabase() {
  await mongoose.connect(process.env.DATABASE_CONNECTION);
  console.log("Database connection established");
}

function loadSchemas() {
  require("../models/User");
}

async function init() {
  try {
    await connectToDatabase();
    loadSchemas();
  } catch (err) {
    console.log(err);
  }
}

module.exports = init;
