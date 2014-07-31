
//Dependencies
var template = require('./templates/graphComposite');

/// Create and Require the child views and their corresponding models with the following pattern:
//var GraphConsultEditView = require('./graphConsultEditView');
//var Graph = require('../../models/accueil/graph');

/// Create and Require the service if needed.
//var Service = require('../../services/accueil/serviceGraph');

/**
 * [__TO_FILL__]
 * @type {CompositeView} - see lib/views/composite-edit-view.js in fmk.
 * @property {template} template - The template of the composite, must contains container for rendering subviews.
 * @property {modelName} - The metadatas of the model which will be automatically created for the composite.
 * @property {function} saveModelSvc - The service use to save the model of your view.
 * @property {function} additionalData - Additional data you want to give to the template.
 * @property {function} initialize - Redefine all the sub views of the composite.
 */
module.exports = Fmk.Views.CompositeView.extend({
    template: template,
    modelName: "accueil.graph",
    saveModelSvc: Service.save,
    additionalData: function additionalData() {
        return { isEdit: this.isEdit };
    },
    initialize: function initializeGraphCompositeView(options) {
        options = options || {};
        options.modelName = this.modelName;
        // Call the parent's initialize.
        CompositeView.prototype.initialize.call(this, options);

        /// Initiliaze the child views with the following pattern:
        //this.graphConsultEditView = new GraphConsultEditView(_.extend({ model: new Graph() }, options));

        /// Register the child view with the following pattern:
        /// -selector: CSS selector in the CompositeTemplate where the child view will be rendered.
        /// -name: name of the view of the CompositeView object (declared in the initialization part)
        /// -type: "model" or "collection"
        /// -modelProperty: key used in the save object (that will be sent to server) to store the child view's data.
        //this.registerView({ selector: "div#graphConsultEdit", name: "graphConsultEditView", type: "model", modelProperty: "graph" });
    }
});