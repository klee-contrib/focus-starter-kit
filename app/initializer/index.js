//Initialisation of global links
import './global-link-initializer';
//Initialisation des configurations
import './domain-initializer';
import './definition-initializer';
import referenceList from './reference-list-initializer';
referenceList.initialize();
import searchStoreInitializer from './search-store-initializer';
searchStoreInitializer.initialize();
import './translation-initializer';
import './user-initializer';

//Initialisation du layout
import './layout-initializer';
