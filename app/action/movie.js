import movieServices from '../services/movie';
import actionBuilder from 'focus-core/application/action-builder';

export const actorsActions = {
    load: actionBuilder({
        node: 'actors',
        service: movieServices.loadMovieActors,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    })
}

export const caracteristicsActions = {
    load: actionBuilder({
        node: 'movie',
        service: movieServices.loadMovie,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    }),
    save: actionBuilder({
        node: 'movie',
        service: movieServices.saveMovieCaracteristics,
        shouldDumpStoreOnActionCall: true,
        status: 'saved'
    })
}

export const synopsisActions = {
    load: actionBuilder({
        node: 'movie',
        service: movieServices.loadMovie,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    }),
    save: actionBuilder({
        node: 'movie',
        service: movieServices.saveMovieSynopsis,
        shouldDumpStoreOnActionCall: true,
        status: 'saved'
    })
}

export const trailerActions = {
    load: actionBuilder({
        node: 'movie',
        service: movieServices.loadMovie,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    })
}
