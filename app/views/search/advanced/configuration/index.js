// seearch services
import service from '../../../../services/search';

//components
import GroupComponent from '../components/group';

//search configurations
import cartridgeConfiguration from './cartridge';
import lineMapper from '../../lines/mapper';
import onLineClick from './line-click';
//import {getScopes} from '../../../../initializer/search-scope-initializer';
import {scopesConfig} from '../../../../config/scopes';

export const configuration = {
    onLineClick,
    isSelection: true,
    cartridgeConfiguration,
    service,
    lineComponentMapper: lineMapper,
    groupComponent: GroupComponent,
    groupMaxRows: 5, // ne fonctionne pas, n'est pas renvoyé dans la config du service search.
    //
    scopesConfig: scopesConfig
};
