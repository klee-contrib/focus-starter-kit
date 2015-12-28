import builder from 'focus-core/util/url/builder';

const searchRoot = API_ROOT + '/common/';

export default {
    /* loads */
    search: builder(searchRoot + 'search', 'POST')
};
