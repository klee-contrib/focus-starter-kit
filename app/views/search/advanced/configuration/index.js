// seearch services
import service from '../../../../services/search';

//components
import GroupComponent from '../components/group';

//search configurations
import cartridgeConfiguration from './cartridge';
import lineComponentMapper from '../../lines';
import onLineClick from './line';

export const configuration = {
    onLineClick,
    isSelection: false,
    cartridgeConfiguration,
    //idField: 'code', // TODO : à quoi ca sert ?
    service,
    lineComponentMapper,
    groupComponent: GroupComponent,
    groupMaxRows: 5 // ne fonctionne pas, n'est pas renvoyé dans la config du service search.
};
