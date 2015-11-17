/**
* These metadatas are generated automatically.
* @type {Object}
*/
export const movie = {
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
    poster: {
        domain: 'DO_URL',
        required: false
    },
    synopsis: {
        domain: 'DO_COMMENT',
        required: true
    },
    trailerName: {
        domain: 'DO_LABEL_MEDIUM',
        required: false
    },
    trailerHRef: {
        domain: 'DO_URL',
        required: false
    },
    shortSynopsis: {
        domain: 'DO_COMMENT',
        required: true
    },
    runtime: {
        domain: 'DO_RUNTIME', //to change to runtime
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
};

export const person = {
    code: {
        domain: 'DO_ID',
        required: true
    },
    fullName: {
        domain: 'DO_LAST_NAME',
        required: true
    },
    firstName: {
        domain: 'DO_FIRST_NAME',
        required: true
    },
    biography: {
        domain: 'DO_COMMENT',
        required: true
    },
    shortBiography: {
        domain: 'DO_COMMENT',
        required: true
    },
    sex: {
        domain: 'DO_ID',
        required: true
    },
    photoURL: {
        domain: 'DO_URL',
        required: false
    },
    birthDate: {
        domain: 'DO_DATE',
        required: false
    },
    birthPlace: {
        domain: 'DO_LAST_NAME',
        required: false
    },
    activity: {
        domain: 'DO_LABEL_LONG',
        required: false
    }
};
