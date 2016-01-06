// seearch services
import service from '../../../../services/search';

//components
import GroupComponent from '../components/group';

//search configurations
import cartridgeConfiguration from './cartridge';
import lineMapper from '../../lines/mapper';
import onLineClick from './line-click';

export const configuration = {
    onLineClick,
    isSelection: false,
    cartridgeConfiguration,
    service,
    lineMapper,
    groupComponent: GroupComponent,
    groupMaxRows: 5 // ne fonctionne pas, n'est pas renvoyé dans la config du service search.
};
