
import actionBuilder from 'focus-core/application/action-builder';
import listActionBuilder from 'focus-core/list/action-builder'

import movieServices from '../services/movie';
import movieListStore from '../stores/movie-list';

export default {
    getMovie: actionBuilder({
        node: 'movie',
        service: movieServices.getMovie,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    }),
    updateMovie: actionBuilder({
        node: 'movie',
        service: movieServices.updateMovie,
        shouldDumpStoreOnActionCall: false,
        status: 'saved'
    }),
    searchMovies: listActionBuilder({
        service: movieServices.searchMovie,
        identifier: 'movieList',
        getListOptions: () => movieListStore.getValue()
    })
};
