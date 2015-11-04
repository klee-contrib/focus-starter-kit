import FocusCore from 'focus-core';
import movieServices from '../services/movie';
const {actionBuilder} = FocusCore.application;

export default {
    movie: {
        load: actionBuilder({
            service: movieServices.loadMovie,
            node: 'movie',
            status: 'loaded',
            shouldDumpStoreOnActionCall: true
        })
    }
};
