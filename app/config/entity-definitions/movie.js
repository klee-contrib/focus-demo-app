
export default {
    code: {
        domain: 'DO_ID',
        isRequired: true
    },
    title: {
        domain: 'DO_LABEL_LONG',
        isRequired: true
    },
    originalTitle: {
        domain: 'DO_LABEL_LONG',
        isRequired: false
    },
    poster: {
        domain: 'DO_URL',
        isRequired: false
    },
    synopsis: {
        domain: 'DO_COMMENT',
        isRequired: true
    },
    trailerName: {
        domain: 'DO_LABEL_MEDIUM',
        isRequired: false
    },
    trailerHRef: {
        domain: 'DO_URL',
        isRequired: false
    },
    shortSynopsis: {
        domain: 'DO_COMMENT',
        isRequired: true
    },
    runtime: {
        domain: 'DO_RUNTIME', //to change to runtime
        isRequired: true
    },
    movieType: {
        domain: 'DO_LABEL_SHORT',
        isRequired: true
    },
    productionYear: {
        domain: 'DO_YEAR',
        isRequired: true
    },
    actors: {
        domain: 'DO_COMMENT',
        redirect: ['moviePeople']
    },
    writers: {
        domain: 'DO_COMMENT',
        redirect: ['moviePeople']
    },
    camera: {
        domain: 'DO_COMMENT',
        redirect: ['moviePeople']
    },
    producers: {
        domain: 'DO_COMMENT',
        redirect: ['moviePeople']
    },
    directors: {
        domain: 'DO_COMMENT',
        redirect: ['moviePeople']
    }
};
