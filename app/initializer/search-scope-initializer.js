import {map} from 'lodash';

let _scopes;

/**
 * Global publish function to get Scopes
 * @return {[scope]} scope list
 */
export function getScopes(){
    console.debug('[SCOPES] lazy get application scopes');
    return _scopes;
}

/**
 * global loadScopes function
 * @return {[scope]} scope list
 */
export function loadScopes() {
    console.log('[INIT] Load application scopes');
    return Promise.resolve(
        //here call your webservice to get scope references
        [
            {code: 'ALL', label: 'search.scope.all'},
            {code: 'MOVIE', label: 'search.scope.movie'},
            {code: 'PERSON', label: 'search.scope.person'}
        ]
    ).then(scopes => {
        //here define application icons
        map(scopes, _applyAdditionalScopeProperties);
        _scopes = scopes;
        return scopes;
    });
}

function _applyAdditionalScopeProperties(scope) {
    switch (scope.code) {
        case 'ALL':
            scope.icon = 'all_inclusive';
            break;
        case 'MOVIE':
            scope.icon = 'movie'
            break;
        case 'PERSON':
            scope.icon = 'person';
            break;
        default:
            scope.icon = 'mood_bad'
            break;
    }
}
