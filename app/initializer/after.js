////////////////////////////////////////////////////////
/// SCRIPT EXECUTED AFTER DOM CONTENT LOADED
////////////////////////////////////////////////////////
import globalLinkInitializer from './scripts/global-link-initializer';
import searchStoreInitializer from './scripts/search-store-initializer';
import userInitializer from './scripts/user-initializer';
import layoutInitializer from './scripts/layout-initializer';


/**
 * Launches initializers that has to be loaded after DOM content is loaded.
 */
export const initialize = () => {
    console.log('[INITIALIZER - AFTER CONTENT LOADED]');
    globalLinkInitializer();
    searchStoreInitializer();
    userInitializer();
    layoutInitializer();
};
