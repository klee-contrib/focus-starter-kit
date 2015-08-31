const URL = require('../../config/server');
const fetch = Focus.network.fetch;

module.exports = {
    getScopes() {
        return fetch(URL.reference.getScopes({}));
    }
};
