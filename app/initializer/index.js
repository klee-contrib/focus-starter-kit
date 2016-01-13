//Initialisation of global links
import './global-link-initializer';
//Initialisation des configurations
import './domain-initializer';
import './definition-initializer';
import referenceList from './reference-list-initializer';
import searchStoreInitializer from './search-store-initializer';
import './translation-initializer';
import './user-initializer';
import {loadScopes} from './search-scope-initializer';
//Initialisation du layout
import './layout-initializer';

export default function initialize(){

    // synchronous
    referenceList.initialize();
    searchStoreInitializer.initialize();

    //asynchronous
    return Promise.all([loadScopes()])
}
