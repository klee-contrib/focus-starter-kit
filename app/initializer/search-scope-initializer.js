let _scopes;

/**
 * Global publish function to get Scopes
 * @return {[scope]} scope list
 */
export function getScopes(){
    return _scopes;
}

/**
 * global loadScopes function
 * @return {[scope]} scope list
 */
export function loadScopes() {
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
