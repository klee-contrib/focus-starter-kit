import FocusCore from 'focus-core';
import movieServices from '../services/movie';
const {actionBuilder} = FocusCore.application;

export default {
    movie: {
        loadSynopsis: actionBuilder({
            node: 'movie',
            service: movieServices.loadMovieSynopsis,
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
            service: movieServices.saveMoveCaracteristics,
            shouldDumpStoreOnActionCall: true,
            status: 'saved'
        })
    }
};
