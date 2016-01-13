import FocusCore from 'focus-core';
import {getScopes} from './search-scope-initializer';

// Path to the reference service.
// const referenceService = require('../services/reference');

module.exports = {
    initialize() {
        //FocusCore.reference.config.set({scopes: referenceService.getScopes});
        FocusCore.reference.config.set({
            scopes() {
                return new Promise(success => {
                    success(getScopes());
                });
            }
        });

    }
};
