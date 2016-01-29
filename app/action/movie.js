import movieServices from '../services/movie';
import actionBuilder from 'focus-core/application/action-builder';

export const castingActions = {
    loadPeople: actionBuilder({
        node: 'movieCasting',
        service: movieServices.loadMovieCasting,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    })
}

export const caracteristicsActions = {
    load: actionBuilder({
        node: 'movieCaracteristiques',
        service: movieServices.loadMovie,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    }),
    save: actionBuilder({
        node: 'movieCaracteristiques',
        service: movieServices.saveMovieCaracteristics,
        shouldDumpStoreOnActionCall: true,
        status: 'saved'
    })
}

export const synopsisActions = {
    load: actionBuilder({
        node: 'movieSynopsis',
        service: movieServices.loadMovie,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    }),
    save: actionBuilder({
        node: 'movieSynopsis',
        service: movieServices.saveMovieSynopsis,
        shouldDumpStoreOnActionCall: true,
        status: 'saved'
    })
}

export const trailerActions = {
    load: actionBuilder({
        node: 'movieTrailer',
        service: movieServices.loadMovie,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    })
}
