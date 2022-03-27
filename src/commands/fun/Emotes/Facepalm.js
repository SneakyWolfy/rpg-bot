const SubCommand = require("../../../utils/SubCommand");

class Facepalm extends SubCommand {
  constructor() {
    super({ description: "Cover your eyes in disappointment" });
  }
}

module.exports = new Facepalm();
