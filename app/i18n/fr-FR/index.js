import {merge} from 'lodash';

const french = merge(require('../generated/fr-FR.generated'), require('./fr-FR'));

export default french;
