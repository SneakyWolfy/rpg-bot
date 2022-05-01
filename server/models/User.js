const mongoose = require("mongoose");
const { Schema } = mongoose;
const findOneOrCreate = require("mongoose-findoneorcreate");

const userGuild = new Schema({
  id: String,
  name: String,
  icon: String,
  owner: Boolean,
  permissions: Number,
  features: Array,
  permissions_new: String,
});

const userSchema = new Schema({
  userId: String,
  username: String,
  avatar: String,
  discriminator: String,
  public_flags: Number,
  flags: Number,
  locale: String,
  email: String,
  verified: Boolean,
  provider: String,
  accessToken: String,
  guilds: [userGuild],
  fetchedAt: Date,
});

userSchema.plugin(findOneOrCreate);

mongoose.model("users", userSchema);
