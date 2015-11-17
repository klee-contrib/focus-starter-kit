import personSerivces from '../services/person';
import actionBuilder from 'focus-core/application/action-builder';

export const identityActions = {
    load: actionBuilder({
        node: 'person',
        service: personSerivces.loadPerson,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    }),
    save: actionBuilder({
        node: 'person',
        service: personSerivces.savePersonIdentity,
        shouldDumpStoreOnActionCall: true,
        status: 'saved'
    })
}

export const biographyActions = {
    load: actionBuilder({
        node: 'person',
        service: personSerivces.loadPerson,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    }),
    save: actionBuilder({
        node: 'person',
        service: personSerivces.savePersonBiography,
        shouldDumpStoreOnActionCall: true,
        status: 'saved'
    })
}
