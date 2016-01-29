import personSerivces from '../services/person';
import actionBuilder from 'focus-core/application/action-builder';


export const identityActions = {
    load: actionBuilder({
        node: 'personIdentity',
        service: personSerivces.loadPerson,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    }),
    save: actionBuilder({
        node: 'personIdentity',
        service: personSerivces.savePersonIdentity,
        shouldDumpStoreOnActionCall: true,
        status: 'saved'
    })
}

export const biographyActions = {
    load: actionBuilder({
        node: 'personBiography',
        service: personSerivces.loadPerson,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    }),
    save: actionBuilder({
        node: 'personBiography',
        service: personSerivces.savePersonBiography,
        shouldDumpStoreOnActionCall: true,
        status: 'saved'
    })
}

export const moviesLinksActions = {
    load: actionBuilder({
        node: 'personMovieLinks',
        service: personSerivces.loadPersonMovies,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    })
}
