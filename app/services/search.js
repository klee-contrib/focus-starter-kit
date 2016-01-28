import fetch from 'focus-core/network/fetch';

import commonUrl from '../config/server/common';
import moviesUrl from '../config/server/movies';
import personsUrl from '../config/server/persons';

export default {

    _rewriteFacets(facets) {
        if(facets.length === 1) {
            return this._rewriteFacet(facets[0]);
        }
        const newFacets = [];
        facets.map((facet) => {
            newFacets.push(this._rewriteFacet(facet));
        });
        return newFacets;
    },

    _rewriteFacet(facet) {
        const newFacet = {};
        newFacet[facet.key] = facet.value;
        return newFacet;
    },

    /**
    * Search with scope.
    * @param  {Object} AdvancedSearch config that launches the call of this service
    * @return {Promise}
    */
    scoped(config) {
        const {data} = config;
        const {criteria, facets, groups} = data;
        const {query, scope} = criteria;
        const rewrittenFacets = this._rewriteFacets(facets);
        config.data = { criteria: query, facets: rewrittenFacets, group: groups };
        switch (scope) {
            case 'movie':
                console.log(`[SEARCH MOVIE] config: ${JSON.stringify(config)}`);
                return fetch(moviesUrl.search(config));
            case 'person':
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
