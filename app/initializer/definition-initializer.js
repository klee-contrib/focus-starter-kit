import entityContainer from 'focus-core/definition/entity/container';
import entitytDefinition from '../config/entity-definition';
import {uniq} from 'lodash/array';

export default () => {
    entityContainer.setEntityConfiguration(entitytDefinition);

    //Display domaines utilisés
    const entityDef = require('../config/entity-definition');
    const arr = [];
    for (const node in entityDef) {
        for (const sub in entityDef[node]) {
            arr.push(entityDef[node][sub].domain);
        }
    }
    const appDomains = uniq(arr);
    const domains = Object.keys(require('../config/domain'));

    console.info('########################## DOMAINS ##############################');
    console.info('Entity definitions domains: ', appDomains);
    console.info('Domains with a definition', domains);
    console.warn('Missing domain\'s definition', _.difference(appDomains, _.intersection(appDomains, domains)));
    console.warn('Useless domain\'s definition', _.difference(domains, _.intersection(appDomains, domains)));
    console.info('####################################################################');
}
