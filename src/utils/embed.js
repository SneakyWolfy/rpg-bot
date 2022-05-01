const discord = require("discord.js");
const colors = require("../../config").colors;

const generateEmbed = (hexColor) => {
  /**
   * @type {discord.MessageEmbed}
   */
  const embed = new discord.MessageEmbed();
  embed.setColor(hexColor);
  return embed;
};

exports.defaultEmbed = () => generateEmbed(colors.default);
exports.successEmbed = () => generateEmbed(colors.success);
exports.warningEmbed = () => generateEmbed(colors.warning);
exports.errorEmbed = () => generateEmbed(colors.failure);
