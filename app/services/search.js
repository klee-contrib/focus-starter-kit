import fetch from 'focus-core/network/fetch';

export default {
    scoped(config) {
        console.log(`[SEARCH] call search scoped with confi ${config}`);
    },
    unscoped(config) {
        console.log(`[SEARCH] call search unscoped with confi ${config}`);
    }
};
