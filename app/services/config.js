import fetch from 'focus-core/network/fetch';
//import configUrl from '../config/server/config';

export default {
    loadConfig() {
        console.log(`[CONFIG] call loadConfig method. `);
        return Promise.resolve({});
//        return fetch(configUrl.loadConfig(), {isCORS: false});
    }
}
