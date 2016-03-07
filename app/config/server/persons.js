import builder from 'focus-core/util/url/builder';
import {apiRoot} from './index';

const personRoot = `${apiRoot}persons/`;

export default {
    loadPerson: builder(personRoot + '${id}', 'GET'),

    /* save */
    savePerson: builder(personRoot + '${id}', 'PUT'),

    /* search */
    search: builder(personRoot + 'search?listState.skip=${skip}&listState.sortDesc=${sortDesc}&listState.top=${top}', 'POST')
};
