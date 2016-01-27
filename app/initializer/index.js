//Initialisation of global links
console.log('IMPORT global link initializer');
import './global-link-initializer';

//Initialisation des configurations
console.log('IMPORT domain initializer');
import './domain-initializer';

console.log('IMPORT definition initializer');
import './definition-initializer';

console.log('IMPORT search store initializer');
import searchStoreInitializer from './search-store-initializer';

console.log('IMPORT translation initializer');
import './translation-initializer';

console.log('IMPORT user initializer');
import './user-initializer';

console.log('IMPORT search scope loader');
import {loadScopes} from './search-scope-initializer';

console.log('IMPORT layout initializer');
//Initialisation du layout
import './layout-initializer';

export default {
    initialize() {
        console.log('[INITIALIZE]');

        // synchronous
        console.log('[searchStoreInitializer] INIT');
        searchStoreInitializer.initialize();

        //asynchronous
        console.log('[loadScopes] Promise');
        return Promise.all([loadScopes()])
    }
}
