import fetch from 'focus-core/network/fetch';

import commonUrl from '../config/server/common';

export default {
    scoped(config) {
        const {criteria, facets, groups} = config.data;
        const {query, scope} = criteria;
        if(scope) {
            switch (scope) {
                case 'ALL':
                    config.data = { criteria: query };
                    console.log(`[SEARCH ALL] config: ${JSON.stringify(config)}`);
                    return fetch(commonUrl.search(config));
                case 'MOVIE':
                    config.data = { criteria: query };
                    console.log(`[SEARCH MOVIE] config: ${JSON.stringify(config)}`);
                    return fetch(commonUrl.search(config));
                case 'PERSON':
                    config.data = { criteria: query };
                    console.log(`[SEARCH PERSON] config: ${JSON.stringify(config)}`);
                    return fetch(commonUrl.search(config));
                default:

            }
        }
        config.data = { criteria: query };
        console.log(`[SEARCH NO SCOPE] config: ${JSON.stringify(config)}`);
        return fetch(commonUrl.search(config));
        //config.data = { criteria: query, scope, facets, groups };
        //console.log(`[SEARCH] call search scoped with config.\nCONFIGURATION: ${JSON.stringify(config)}`);
        //return fetch(commonUrl.search(config));
    },
    unscoped(config) {
        console.log(`[SEARCH] call search unscoped with config.\nCONFIGURATION: ${JSON.stringify(config)}`);
        return fetch(commonUrl.search(config));
    }
};
