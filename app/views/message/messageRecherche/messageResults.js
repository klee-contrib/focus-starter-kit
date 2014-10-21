/**/
var ResultsView = Fmk.Views.SearchResultsView;
var resultsTemplate = require('./templates/messageResults');
/**
 * View chich contains the search results.
 * @module "views/message/messageRecherche"
 */
module.exports = ResultsView.extend({
  /**
   * Template in order to display all the results.
   * @type {function}
   */
  template: resultsTemplate
});