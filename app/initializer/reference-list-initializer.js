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
                            {code: 'ALL', icon: 'all_inclusive', label: 'search.scope.all'},
                            {code: 'MOVIE', icon: 'movie', label: 'search.scope.movie'},
                            {code: 'PERSON', icon: 'person', label: 'search.scope.person'}
                        ]
                    );
                });
            }
        });

    }
};
