const express = require("express");
const expressSession = require("express-session");
const MongoStore = require("connect-mongo");

const passport = require("passport");

const app = express();
const port = process.env.PORT || 5000;

app.use(
  expressSession({
    secret: process.env.TOKEN_KEY,
    saveUninitialized: false, //? don't create session until something stored
    resave: false, //? don't save session if unmodified
    store: MongoStore.create({
      mongoUrl: process.env.DATABASE_CONNECTION,
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send({ data: "Hi" });
});

app.use("/auth", require("../routes/auth"));
app.use("/api", require("../routes/api"));

app.listen(port);
console.log(`listening on port ${port}`);
