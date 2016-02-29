import fetch from 'focus-core/network/fetch';

import commonUrl from '../config/server/common';
import moviesUrl from '../config/server/movies';
import personsUrl from '../config/server/persons';

import trim from 'lodash/string/trim';

export default {

    _transformConfig(config, includeFacets = true) {
        const {data} = config;
        const {criteria, facets, group} = data;
        const {query} = criteria;
        const trimmedGroup = trim(group);
        config.data = { criteria: query };
        if(includeFacets) {
            config.data['facets'] = facets;  // we should have to do this. check with backend API to remove that.
        }
        if(trimmedGroup.length > 0) {
            config.data['group'] = trimmedGroup;
        }
        return config;
    },

    _search(config, scope) { // this should the target : search service should be written this way.
        switch (scope) {
            case 'movie':
                console.log(`[SEARCH MOVIE] config: ${JSON.stringify(config)}`);
                return fetch(moviesUrl.search(config));
            case 'person':
                console.log(`[SEARCH PERSON] config: ${JSON.stringify(config)}`);
                return fetch(personsUrl.search(config));
            default:
                console.log(`[SEARCH ALL] config: ${JSON.stringify(config)}`);
                return fetch(commonUrl.search(config));
        }
    },

    /**
    * Search with scope.
    * @param  {Object} AdvancedSearch config that launches the call of this service
    * @return {Promise}
    */
    scoped(config) {
        const {criteria} = config.data;
        const {scope} = criteria;
        const serverConfig = this._transformConfig(config);
        return this._search(serverConfig, scope);
    },
    /**
    * Search without scope.
    * @param  {Object} AdvancedSearch config that launches the call of this service
    * @return {Promise}
    */
    unscoped(config) {
        let serverConfig = this._transformConfig(config, false);
        return this._search(serverConfig);
    }
};
