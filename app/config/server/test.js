import builder from 'focus-core/util/url/builder';

const testRoot = API_ROOT + '/test/error/';

export default {
    loadError: builder(testRoot, 'GET')
};
