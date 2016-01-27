import entityContainer from 'focus-core/definition/entity/container';
import entitytDefinitionConfig from '../config/entity-definition';
import domainsConfig from '../config/domain';
import {uniq} from 'lodash/array';

export default () => {

    console.log(entitytDefinitionConfig);
    console.log(domainsConfig);
    
    entityContainer.setEntityConfiguration(entitytDefinitionConfig);

    //Display domaines utilisés
    const arr = [];
    for (const node in entitytDefinitionConfig) {
        for (const sub in entitytDefinitionConfig[node]) {
            arr.push(entitytDefinitionConfig[node][sub].domain);
        }
    }
    const appDomains = uniq(arr);
    const domains = Object.keys(domainsConfig);

    console.info('########################## DOMAINS ##############################');
    //console.info('Entity definitions domains: ', appDomains);
    //console.info('Domains with a definition', domains);
    console.warn('Missing domain\'s definition', _.difference(appDomains, _.intersection(appDomains, domains)));
    console.warn('Useless domain\'s definition', _.difference(domains, _.intersection(appDomains, domains)));
    console.info('####################################################################');
}
