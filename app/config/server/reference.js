const root = '.';
const url = Focus.util.url.builder;

module.exports = {
    getScopes: url(root + '/scopes', 'GET')
};
