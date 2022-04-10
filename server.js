const mongoose = require("mongoose");

const loadDatabase = async () => {
  try {
    const DB = process.env.DATABASE;
    console.log(DB);

    await mongoose.connect(DB);
    console.log("Database Connected");
    console.log(mongoose.connection.readyState);
  } catch (err) {
    // throw new Error(`Issue with loading database: ${error}`);
    console.error(err);
  }
};

const init = async () => {
  await loadDatabase();
};
exports.init = init;
