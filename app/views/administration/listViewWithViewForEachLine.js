var ListView = Fmk.Views.ListView;
var template = require('./templates/listViewWithViewForEachLine');
var LineModelTest = require('../../models/administration/lineModelTest');
var LineViewForList = require('./lineViewForList');
var ListViewTestSvc = require('../../services/administration/serviceListViewTest');

module.exports = ListView.extend({
    template: template,
    ResultSelectionModel: LineModelTest,
    search: ListViewTestSvc.list,
    viewForEachLineConfiguration: {
        isActive: true, //True or false will make the rendering different.
        LineView: LineViewForList, //View to create for each line.
        ModelLineView: LineModelTest, //Model for the view initialize with collection data.
        parentContainer: "table tbody"  //selector into which the view .
    },
});