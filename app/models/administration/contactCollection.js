//Dependencies.
var URL = require('../URL');
var SingleModel = require('./contact');
var PaginatedCollection = Fmk.Models.PaginatedCollection;
//define a collection of contcat 
module.exports = PaginatedCollection.extend({
    model: SingleModel,
    modelName: "administration.contcatCollection", // TODO: Verify that the modelName is correct
    url: URL.administration.contactCollection // TODO: define the Url and corresponding controller.
    // TODO: define the default sortField for this collection.
    //sortField: { field: "fieldName", order: "asc" },
    // TODO: if the collection can be exported, define the column labels for export.
    //exportColumnLabels: { "propertyName" : "column.label.key" }
});
