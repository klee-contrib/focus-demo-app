export default {
    code: {
        domain: 'DO_ID',
        isRequired: true
    },
    keywords: {
        domain: 'DO_LABEL_LONG',
        isRequired: false
    },
    movieType: {
        domain: 'DO_LABEL_SHORT',
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
    pressRating: {
        domain: 'DO_QUANTITY',
        isRequired: false,
    },
    productionYear: {
        domain: 'DO_YEAR',
        isRequired: true
    },
    runtime: {
        domain: 'DO_RUNTIME', //to change to runtime
        isRequired: true
    },
    title: {
        domain: 'DO_LABEL_LONG',
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
    synopsis: {
        domain: 'DO_COMMENT',
        isRequired: true
    },
    userRating: {
        domain: 'DO_QUANTITY',
        isRequired: false,
    },
    // /** lists */
    // actors: {
    //     redirect: ['moviePeople']
    // },
    // writers: {
    //     redirect: ['moviePeople']
    // },
    // camera: {
    //     redirect: ['moviePeople']
    // },
    // producers: {
    //     redirect: ['moviePeople']
    // },
    // directors: {
    //     redirect: ['moviePeople']
    // }
};
