const checkPermissions = require("./checkPermissions");

const validate = async (interaction, command) => {
  await checkPermissions(interaction, command);
};

module.exports = validate;
