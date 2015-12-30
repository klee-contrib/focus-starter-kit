import fetch from 'focus-core/network/fetch';

import commonUrl from '../config/server/common';
import moviesUrl from '../config/server/movies';
import personsUrl from '../config/server/persons';

export default {
    /**
    * Search with scope.
    * @param  {Object} AdvancedSearch config that launches the call of this service
    * @return {Promise}
    */
    scoped(config) {
        const {data} = config;
        const {criteria, facets, groups} = data;
        const {query, scope} = criteria;
        config.data = { criteria: query, facets, group: groups };
        switch (scope) {
            case 'MOVIE':
                console.log(`[SEARCH MOVIE] config: ${JSON.stringify(config)}`);
                return fetch(moviesUrl.search(config));
            case 'PERSON':
                console.log(`[SEARCH PERSON] config: ${JSON.stringify(config)}`);
                return fetch(personsUrl.search(config));
            default:
                console.error(`Unknown scope ${scope}. The backend search web service is not called.`);
                return;
        }

    },
    /**
    * Search without scope.
    * @param  {Object} AdvancedSearch config that launches the call of this service
    * @return {Promise}
    */
    unscoped(config) {
        const {data} = config;
        const {criteria} = data;
        const {query, scope} = criteria;
        config.data = { criteria: query };
        console.log(`[SEARCH] call search unscoped with config.\nCONFIGURATION: ${JSON.stringify(config)}`);
        return fetch(commonUrl.search(config));
    }
};
