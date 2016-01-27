//Initializing configurations
import globalLinkInitializer from './global-link-initializer';
//import referenceListInitializer from './reference-list-initializer';
import domainInitializer from './domain-initializer';
import definitionInitializer from './definition-initializer';
import searchStoreInitializer from './search-store-initializer';
import translationInitializer from './translation-initializer';
import userInitializer from './user-initializer';
import {loadScopes} from './search-scope-initializer';
import layoutInitializer from './layout-initializer';

export const initializeBeforeDOMContentLoaded = () => {
    //referenceListInitializer();
};

export const initializeAfterDOMContentLoaded = () => {
    globalLinkInitializer();
    domainInitializer();
    definitionInitializer();

    // synchronous
    searchStoreInitializer();

    translationInitializer();
    userInitializer();
    layoutInitializer();

    //asynchronous
    return Promise.all([loadScopes()])
};
