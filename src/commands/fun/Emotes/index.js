const SuperCommand = require("../../../utils/SuperCommand");

class Emote extends SuperCommand {
  constructor() {
    super({ description: "List of emotes to perform", __dirname });
  }
}

module.exports = new Emote();
