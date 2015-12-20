import FocusCore from 'focus-core';

// Path to the reference service.
// const referenceService = require('../services/reference');

module.exports = {
    initialize() {
        //FocusCore.reference.config.set({scopes: referenceService.getScopes});
        FocusCore.reference.config.set({
            scopes() {
                return new Promise(success => {
                    success(
                        [
                            {code: 'all', label: 'search.scope.all'},
                            {code: 'movie', label: 'search.scope.movie'},
                            {code: 'person', label: 'search.scope.person'}
                        ]
                    );
                });
            }
        });

    }
};
