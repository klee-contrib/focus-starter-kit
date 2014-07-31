
function listListViewTest(criteria, pagesInfo) {
    //This service is not calling any server. It is a fake for tests.
    var response = {
        totalRecords: 1,
        values: Fmk.Helpers.utilHelper.generateFake.collection({ label: "line", value: "" },10)
    };
    return Fmk.Helpers.utilHelper.loadLocalData(response);
}
module.exports = {
    list: listListViewTest
};