var ListView = Fmk.Views.ListView;
var template = require('./templates/diagnostic');
var DiagnosticModel = require('../../models/administration/diagnostic');
var DiagnosticSvc = require('../../services/administration/serviceDiagnostic');


module.exports = ListView.extend({
    template: template,
    ResultSelectionType: "administration.diagnostic",
    ResultSelectionModel: Fmk.Models.Model.extend({ modelName: "administration.diagnostic", required: false }),
    search: DiagnosticSvc.list
});