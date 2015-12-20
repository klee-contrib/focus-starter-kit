import builder from 'focus-core/util/url/builder';

const searchRoot = API_ROOT + '/common/';

export default {
    /* loads */
    loadMovie: builder(movieRoot + '/search', 'POST')
};
