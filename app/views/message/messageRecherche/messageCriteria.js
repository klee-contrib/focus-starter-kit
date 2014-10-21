//Dependencies
var SearchView = Fmk.Views.SearchView;
var msgSvc = require('../../../services/serviceMessage');
var messageCriteriaTemplate = require('./templates/messageCriteria');
var MessageResultCollection =  require('../../../models/message/messageRecherche/messageResultCollection');
var MessageResultView =  require('./messageResults');

/**
 * View to display the search page.
 * @module 'views/message/messageRecherche/messageCriteria'
 */
module.exports = SearchView.extend({
  /**
   * Service call in order to load the data from the given criteria.
   * @type {[type]}
   */
  search: msgSvc.loadMessagesByCriteria,
  /**
   * Template use to display the criteria.
   * @type {[type]}
   */
  template: messageCriteriaTemplate,
  /**
   * Collection contenant les résultats.
   * @type {Collection}
   */
  Results: MessageResultCollection,
  /**
   * View used in order to display the Results.
   * @type {View}
   */
  ResultsView: MessageResultView
});