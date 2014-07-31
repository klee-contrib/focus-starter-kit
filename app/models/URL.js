var root = require('../config').apiroot;

var urls = {
    // Here are defined all urls to server
    administration: {
        diagnosticCollection: root + '/odata/Diagnostic',
        lineModelTestCollection: root + '/odata/LineModelTestCollections',
        contact: root + "/contact",
        contactCollection: root + "/contacts"
    },
    rightsManagement: root + "/api/permission"
};
module.exports = urls;