var template = require('./templates/compositeTest');
var ListViewWithViewForEachLine = require('./listViewWithViewForEachLine');
var Collection = require('../../models/administration/lineModelTestCollection');
module.exports = Fmk.Views.CompositeView.extend({
    template: template,
    modelName: "compositeViewModel",
    //Initialize the composite test view.
    customOptions:{},
    saveModelSvc: function () {
        return new Promise(function (success, error) {
            success("Ok");
        });
    },
    initialize: function initializeCompositeTestView() {
        Fmk.Views.CompositeView.prototype.initialize.call(this);
        this.linesView = new ListViewWithViewForEachLine({ model: new Collection(), isEdit: true });
       // this.linesView2 = new ListViewWithViewForEachLine({ model: new Collection(), isEdit: true });
        this.registerView({ selector: "div#zone1", name: "linesView", type: "collection", modelProperty: "lines" });
        //this.registerView({ selector: "div#zone2", name: "linesView2", type: "collection", modelProperty: "lines2" });

    }
});