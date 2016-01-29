//Initializing configurations$
import globalLinkInitializer from './global-link-initializer';
import referenceListInitializer from './reference-list-initializer';
import domainInitializer from './domain-initializer';
import definitionInitializer from './definition-initializer';
import searchStoreInitializer from './search-store-initializer';
import translationInitializer from './translation-initializer';
import userInitializer from './user-initializer';
import layoutInitializer from './layout-initializer';


/**
 * Launch initializers that can to be executed before DOM content is loaded (asap)
 */
export const initializeBeforeDOMContentLoaded = () => {
    definitionInitializer();
    domainInitializer();
    referenceListInitializer();
    translationInitializer();
};

/**
 * Launches initializers that has to be loaded after DOM content is loaded.
 */
export const initializeAfterDOMContentLoaded = () => {
    globalLinkInitializer();
    searchStoreInitializer();
    userInitializer();
    layoutInitializer();

    //asynchronous
    //return Promise.all([initializer(), initializer()]); // be careful to correctly handle the promise in index.js of application
};
