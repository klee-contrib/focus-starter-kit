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

export const cameramenActions = {
    load: actionBuilder({
        node: 'cameramen',
        service: movieServices.loadMovieCameramen,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    })
}

export const castingActions = {
    loadPeople: actionBuilder({
        node: 'casting',
        service: movieServices.loadMoviePeople,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    }),
    loadActors: actionBuilder({
        node: 'casting',
        service: movieServices.loadMovieActors,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    }),
    loadDirectors: actionBuilder({
        node: 'casting',
        service: movieServices.loadMovieDirectors,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    }),
    loadProducers: actionBuilder({
        node: 'casting',
        service: movieServices.loadMovieProducers,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    }),
    loadWriters: actionBuilder({
        node: 'casting',
        service: movieServices.loadMovieWriters,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    })
}

export const directorsActions = {
    load: actionBuilder({
        node: 'directors',
        service: movieServices.loadMovieDirectors,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    })
}

export const producersActions = {
    load: actionBuilder({
        node: 'producers',
        service: movieServices.loadMovieDirectors,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    })
}

export const writersActions = {
    load: actionBuilder({
        node: 'writers',
        service: movieServices.loadMovieWriters,
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
