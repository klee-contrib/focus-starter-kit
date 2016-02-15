import builder from 'focus-core/util/url/builder';

const rankingsRoot = './rankings/';

export default {
    dateRanking: builder(rankingsRoot + 'date', 'GET'),
    markRanking: builder(rankingsRoot + 'mark', 'GET')
};
