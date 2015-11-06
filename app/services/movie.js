import FocusCore from 'focus-core';
import URL from '../config/server';

const {fetch} = FocusCore.network;

export default {
    loadMovie(id) {
        return fetch(URL.movies.loadMovie({urlData: {id}}));
        // const data = {
        //     code: 10049,
        //     title: 'La Course à la mort de l\'an 2000',
        //     originalTitle: 'Death Race 2000',
        //     synopsis: 'Dans une société futuriste, le sport national est une course de voitures où les points se mesurent au nombre de passants écrasés.',
        //     shortSynopsis: 'Dans une société futuriste, le sport national est une course de voitures où les points se mesurent au nombre de passants écrasés.',
        //     keywords: 'La Course à la mort de l\'an 2000 Les seigneurs de la route course contre la mort death racer contre la montre Death race 2000',
        //     poster: 'http://fr.web.img3.acsta.net/medias/nmedia/18/36/22/16/18867011.jpg',
        //     trailerName: 'Bande-Annonce La Course à la mort de l\'0027an 2000',
        //     trailerHRef: 'http://www.allocine.fr/blogvision/19540328',
        //     runtime: 4800,
        //     movieType: 'Long-métrage',
        //     productionYear: 1975,
        //     actors: '[10328, 5311, 11597, 18483, 1077, 140294, 180024, 67589, 180026, 180027]'
        // }
        // return Promise.resolve(data);
    }
}
