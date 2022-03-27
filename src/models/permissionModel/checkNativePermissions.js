// eslint-disable-next-line no-unused-vars
const { Interaction } = require("discord.js");
const AppError = require("../../utils/AppError");
// eslint-disable-next-line no-unused-vars
const Command = require("../../utils/Command");
/**
 *
 * @param {Interaction} interaction
 * @param {Command} command
 * @returns {Boolean} True - throws error if fails to validate.
 */
const validateNativePermissions = async (interaction, command) => {
  const isPermitted = await interaction.member.permissions.has(
    command.reqPermissions,
    {
      checkAdmin: command.adminOverride,
      checkOwner: command.ownerOverride,
    }
  );

  if (!isPermitted) {
    const missingPerms = command.reqPermissions
      .filter(
        (perm) => !interaction.member.permissions.toArray().includes(perm)
      )
      .join(", ");

    AppError(
      "Unauthorized",
      `You don't have the required permission to use this command: \`${missingPerms}\`!`
    );
  }
  return true;
};

module.exports = validateNativePermissions;
