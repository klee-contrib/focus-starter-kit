import {config} from 'focus-core/reference';

// Path to the reference service.
// const referenceService = require('../services/reference');

// load here all your reference lists
export default () => {
    console.log('|--- [initializer] REFERENCES');

    config.set({
        scopes: () => {
            return Promise.resolve(
                //here call your webservice to get scope references
                [
                    {code: 'all', label: 'search.scope.all'},
                    {code: 'movie', label: 'search.scope.movie'},
                    {code: 'person', label: 'search.scope.person'}
                ]
            ).then(scopes => {
                //here define application icons
                scopes.map(_applyAdditionalScopeProperties);
                return scopes  ;
            });
        }
    });
}

function _applyAdditionalScopeProperties(scope) {
    switch (scope.code) {
        case 'all':
            scope.icon = 'all_inclusive';
            break;
        case 'movie':
            scope.icon = 'movie'
            break;
        case 'person':
            scope.icon = 'person';
            break;
        default:
            scope.icon = 'mood_bad'
            break;
    }
}
