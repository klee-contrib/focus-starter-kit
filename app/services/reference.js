import FocusCore from 'focus-core';

const URL = require('../config/server');
const fetch = FocusCore.network.fetch;

module.exports = {
    getScopes() {
        return fetch(URL.reference.getScopes({}));
    }
};
