import builder from 'focus-core/util/url/builder';

const rankingsRoot = './movies/rankings/';

export default {
    dateRanking: builder(rankingsRoot + 'date', 'GET'),
    markRanking: builder(rankingsRoot + 'mark', 'GET')
};
