const validateNativePermissions = require("./checkNativePermissions");

const validatePermissions = async (interaction, command) => {
  if (interaction.channel.type === "dm") return true;

  await validateNativePermissions(interaction, command);

  return true;
};

module.exports = validatePermissions;
