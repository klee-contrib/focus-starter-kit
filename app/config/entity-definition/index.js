/**
* These metadatas are generated automatically.
* @type {Object}
*/
export default {
    movie: {
        code: {
            domain: 'DO_ID',
            required: true
        },
        title: {
            domain: 'DO_LABEL_LONG',
            required: true
        },
        originalTitle: {
            domain: 'DO_LABEL_LONG',
            required: false
        },
        synopsis: {
            domain: 'DO_COMMENT',
            required: true
        },
        shortSynopsis: {
            domain: 'DO_COMMENT',
            required: true
        },
        runtime: {
            domain: 'DO_LABEL_SHORT', //to change to runtime
            required: true
        },
        movieType: {
            domain: 'DO_LABEL_SHORT',
            required: true
        },
        productionYear: {
            domain: 'DO_YEAR',
            required: true
        }
    }

};
