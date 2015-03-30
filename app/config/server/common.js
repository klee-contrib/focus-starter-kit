var root = "./search";
var url = focus.util.url.builder;
module.exports = {
    searchByScope: url(root+"/?sortFieldName=${sortFieldName}&sortDesc=${sortDesc}&skip=${skip}", 'POST')/*,
    filterResult: url(root+"/filterResult", 'POST')*/
};
