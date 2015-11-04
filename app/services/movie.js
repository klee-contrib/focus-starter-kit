import FocusCore from 'focus-core';
import URL from '../config/server';

const {fetch} = FocusCore.network;

export default {
    loadMovie(id) {
        //return fetch(URL.movies.loadMovie({urlData: {id}}));
        const data = {
            code: 10,
            title: 'La Fête des mères',
            originalTitle: 'La Fête des mères',
            synopsis: 'Une famille se retouve pour la fête des mères.',
            shortSynopsis: 'Une famille se retouve pour la fête des mères.',
            keywords: 'La Fete des meres',
            runtime: 1140,
            movieType: 'Court-métrage',
            productionYear: 1969,
            actors: [13215, 36086, 62258, 13008, 136443]
        }
        return Promise.resolve(data);
    }
}
