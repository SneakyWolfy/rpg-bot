const passport = require("passport");
const DiscordStrategy = require("passport-discord").Strategy;
const mongoose = require("mongoose");

const User = mongoose.model("users");

const strategyOptions = {
  clientID: process.env.DISCORD_CLIENT_ID,
  clientSecret: process.env.DISCORD_CLIENT_SECRET,
  callbackURL: `${
    process.env.PROXY_URL || process.env.APP_URL
  }/auth/discord/callback`,
  scope: ["identify", "email", "guilds", "guilds.join"],
};

const onUserAuthenticate = async (accessToken, refreshToken, profile, done) => {
  const user = await User.findOneOrCreate(
    { userId: profile.id },
    Object.assign(profile, { userId: profile.id })
  );

  done(null, user);
};

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(new DiscordStrategy(strategyOptions, onUserAuthenticate));
