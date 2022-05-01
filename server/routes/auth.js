const passport = require("passport");
const express = require("express");
const router = express.Router();

router.get("/discord", passport.authenticate("discord"));

router.get(
  "/discord/callback",
  passport.authenticate("discord"),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});
module.exports = router;
