/** 
 * @module views/administration/lineViewForList
 * @description This view is use in : "listViewWithViewForEachLine"
 */

var template = require('./templates/lineViewForList');
var templateEdit=  require('./templates/lineEditViewForList');

/**
 * [Line view for a list view]
 * @type {ConsultEditView} see lib/views/consult-edit.js in fmk.
 * @property {string} tagName The name of the tag you want in your html.
 * @property {string} className The name of the css class around your html.
 * @property {template} templateConsult The consultation template of your view.
 * @property {template} templateEdit The edition template of your view.
 * @property {array} referenceNames The list of the references you need in your view.
 * @property {object} customOptions The options you want to redefine in your view @see defaultOptions property of ConsultEditView.
 */
module.exports = Fmk.Views.ConsultEditView.extend({
    tagName: "tr",
    className: "lineTest",
    templateConsult: template,
    templateEdit: templateEdit,
    referenceNames: [],
    customOptions: {
        isModelToLoad: false, //By default the model is loaded.
        isEditMode: true,
        isNavigationOnSave: false,
        isNavigationOnDelete: false,
        isSaveOnServer: false
    }
});