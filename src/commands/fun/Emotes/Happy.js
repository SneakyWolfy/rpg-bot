const SubCommand = require("../../../utils/SubCommand");

class Happy extends SubCommand {
  constructor() {
    super({ description: "Be super happy" });
  }
}

module.exports = new Happy();
