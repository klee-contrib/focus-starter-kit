// seearch services
import service from '../../../../services/search';

//components
import GroupComponent from '../components/group';

//search configurations
import lineMapper from '../../lines/mapper';
import onLineClick from '../../lines/line-click';
import {scopesConfig} from '../../../../config/scopes';

export const configuration = {
    onLineClick,
    service,
    lineComponentMapper: lineMapper,
    groupComponent: GroupComponent,
    groupMaxRows: 5, // ne fonctionne pas, n'est pas renvoyé dans la config du service search.
    scopesConfig: scopesConfig
};
