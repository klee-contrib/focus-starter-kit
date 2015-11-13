import FocusCore from 'focus-core';
import movieServices from '../services/movie';
const {actionBuilder} = FocusCore.application;

export default {
    movie: {
        load: actionBuilder({
            node: 'movie',
            service: movieServices.loadMovie,
            shouldDumpStoreOnActionCall: true,
            status: 'loaded'
        }),
        saveSynopsis: actionBuilder({
            node: 'movie',
            service: movieServices.saveMovieSynopsis,
            shouldDumpStoreOnActionCall: true,
            status: 'saved'
        }),
        saveCaracteristics: actionBuilder({
            node: 'movie',
            service: movieServices.saveMovieCaracteristics,
            shouldDumpStoreOnActionCall: true,
            status: 'saved'
        })
    }
};
