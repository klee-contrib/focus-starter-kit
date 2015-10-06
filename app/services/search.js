const URL = require('../../config/server');
const fetch = FocusCore.network.fetch;

module.exports = {
    unscoped(ajaxConfig) {
        return fetch(URL.search.searchByScope(ajaxConfig));
    },
    scoped(ajaxConfig) {
        return fetch(URL.search.searchByScope(ajaxConfig));
    }
};
