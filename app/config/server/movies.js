import builder from 'focus-core/util/url/builder';
import {apiRoot} from './index';

const movieRoot = `${apiRoot}movies/`;

export default {
    /* loads */
    loadMovie: builder(movieRoot + '${id}', 'GET'),

    /* save */
    saveMovie: builder(movieRoot + '${id}', 'PUT'),

    /* search movie */
    search: builder(movieRoot + 'search?listState.skip=${skip}&listState.sortDesc=${sortDesc}&listState.top=${top}', 'POST')
};
