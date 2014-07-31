var ConsultEditView = Fmk.Views.ConsultEditView; //require('../core/detail-edit-view');
var template = require('./templates/domainTest');
var serviceDomainTest = require('../../services/administration/serviceDomainTest');

module.exports = ConsultEditView.extend({
    customOptions: {
        isEdit: true,
        isNavigationOnSave: false,
        isNavigationOnDelete: false,
        isSaveOnServer: false
    },
    templateEdit: template,
    getModel: serviceDomainTest.get,
    getRenderData: function getRenderDataEdit() {
        return this.model.toJSON();
    }
});
