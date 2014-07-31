
function getDiagnosticList(criteria, pagesInfo) {

    var response = {
        totalRecords: 1,
        values: {
            IsSuccesful: true,
            TestName: "test d'affichage de la page"
        }
    };

    return Fmk.Helpers.utilHelper.loadLocalData(response);
}
module.exports = {
    list: getDiagnosticList
};