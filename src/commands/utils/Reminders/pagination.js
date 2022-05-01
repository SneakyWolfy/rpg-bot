const { MessageActionRow, MessageButton } = require("discord.js");

class Pagination {
  data;

  constructor(pages) {
    this.row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("btnPrevious")
        .setLabel("Previous")
        .setStyle("PRIMARY"),

      new MessageButton()
        .setCustomId("btnFirst")
        .setLabel("First")
        .setStyle("SECONDARY"),

      new MessageButton()
        .setCustomId("btnLast")
        .setLabel("Last")
        .setStyle("SECONDARY"),

      new MessageButton()
        .setCustomId("btnNext")
        .setLabel("Next")
        .setStyle("PRIMARY")
    );

    this.data = {
      curPage: 1,
      resultsPerPage: 6,
      numPages: pages.length / 6,
      embeds: [],
    };

    this.generateMarkup(this.data);
  }

  generateMarkup(state) {
    this.row.components[3].setDisabled(state.curPage >= state.numPages);
    this.row.components[0].setDisabled(state.curPage === 1);

    this.row.components[1].setDisabled(state.curPage === 1);
    this.row.components[2].setDisabled(state.curPage === state.numPages);
  }
}

module.exports.Pagination = Pagination;
