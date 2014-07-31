
function getAutocompleteSampleList(text) {
    var response = {
        results: [
            { id: 1, text: "Row 1" + text },
            { id: 2, text: "Row 2" + text },
            { id: 3, text: "Row 3" + text },
            { id: 4, text: "Row 4" + text }]
    };
    return Fmk.Helpers.utilHelper.loadLocalData(response);
}
module.exports = {
    getAutocompleteSampleList: getAutocompleteSampleList
};