import { CoreStore } from 'focus-core/store';

/**
* Store dealing with application configuration (can be used to load config from server before starting app).
*/
const configStore = new CoreStore({
    definition: {
        config: 'config'
    }
});

const getConfigValue = function getConfigValue(name) {
    return this.getConfig()[name];
};
configStore.getConfigValue = configStore::getConfigValue;

// Example methods
//~ const getPasswordMessageSecurite = function(){
//~ return this.getConfigValue('passwordMessageSecurite');
//~ };
//~ configStore.getPasswordMessageSecurite = configStore::getPasswordMessageSecurite;

export default configStore; 
