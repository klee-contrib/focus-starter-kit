// Libs
import actionBuilder from 'focus-core/application/action-builder';

// Services
import { movieServices } from '../services/movies';

export const movieActions = {
    movieCharacteristics: {
        load: actionBuilder({
            node: 'movieCharacteristics',
            service: movieServices.loadMovieCharacteristics,
            shouldDumpStoreOnActionCall: true,
            status: 'loaded'
        }),
        save: actionBuilder({
            node: 'movieCharacteristics',
            service: movieServices.updateMovieCharacteristics,
            shouldDumpStoreOnActionCall: false,
            status: 'saved'
        })
    }
};
