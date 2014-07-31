var SearchResultsView = Fmk.Views.SearchResultsView;
var template = require('./templates/contactResult');

module.exports = SearchResultsView.extend({
    template: template,
    isShowDetailInside: false
});
