
function getDomainTest(criteria, pagesInfo) {
    return Fmk.Helpers.utilHelper.loadLocalData({ Libelle: "Champ libelle 50" });
}
module.exports = {
    get: getDomainTest
};