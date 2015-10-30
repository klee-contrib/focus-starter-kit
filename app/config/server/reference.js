import FocusCore from 'focus-core';

const root = '.';
const url = FocusCore.util.url.builder;

module.exports = {
    getScopes: url(root + '/scopes', 'GET')
};
