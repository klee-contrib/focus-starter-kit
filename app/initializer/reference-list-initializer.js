import {config} from 'focus-core/reference';

// Path to the reference service.
// const referenceService = require('../services/reference');

export default () => {

    //reference.config.set({scopes: referenceService.getScopes});
    config.set({
        scopes: () => {
            return Promise.resolve(
                [
                    {code: 'all', label: 'search.scope.all'},
                    {code: 'movie', label: 'search.scope.movie'},
                    {code: 'person', label: 'search.scope.person'}
                ]
            );
        }
    });
}
