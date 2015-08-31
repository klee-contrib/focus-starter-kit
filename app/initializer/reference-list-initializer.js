// Path to the reference service.

const referenceService = require('../services/reference');
const reference = Focus.reference;

module.exports = {
    initialize() {
        reference.config.set({scopes: referenceService.getScopes});
    }
};
