import builder from 'focus-core/util/url/builder';

const commonRoot = './common/';

export default {
    /* loads */
    search: builder(commonRoot + 'search?listState.skip=${skip}&listState.top=${top}', 'POST')
};
