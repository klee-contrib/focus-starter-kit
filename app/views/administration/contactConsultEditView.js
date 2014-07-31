//In order to see the code inside the javascript framework you can check lib/views/consult-edit-view.js
var ConsultEditView = Fmk.Views.ConsultEditView;
var templateConsult = require('./templates/contactConsult');
var templateEdit = require('./templates/contactEdit');
var Service = require('../../services/administration/serviceContact');

module.exports = ConsultEditView.extend({
    ///<summary>contactConsultEditView TODO: to complete.</summary>
    
	// Templates
    /// <field type='template'>Template of the consultation of contactConsultEditView.</field>
    templateConsult: templateConsult,

    /// <field type='template'>Template of the consultation of contactConsultEditView.</field>
	templateEdit: templateEdit,
    
    // Services
    /// <field type='function'>Service to call in order to load the model of the view.</field>
    getModelSvc: Service.get, // TODO : Define the get method on service
    /// <field type='function'>Service to call in order to save the model of the view.</field>
	saveModelSvc: Service.save, // TODO : Define the save method on service
    //Url to reload the page.
    generateReloadUrl: function(){
        return "#administration/contact/"+ this.model.get('id');
    },
    //Custom options.
    customOptions: {
        isForceReload: true,
        isNavigationOnSave: false
    }
});