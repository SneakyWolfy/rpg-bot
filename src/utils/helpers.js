const mongoose = require("mongoose");
const { User } = require("../models/userModel");

exports.wait = (time) =>
  new Promise((resolve) => setTimeout(resolve, time * 1000));

exports.fetchUser = async (userId) => {
  console.log("fetching");
  console.log(mongoose.connection.readyState);
  const user = await User.findOne({ userId });

  if (user) return user;
  return await User.create({ userId });
};
