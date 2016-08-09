

export default {
    code: {
        domain: 'DO_ID',
        isRequired: true
    },
    fullName: {
        domain: 'DO_LAST_NAME',
        isRequired: true
    },
    firstName: {
        domain: 'DO_FIRST_NAME',
        isRequired: true
    },
    biography: {
        domain: 'DO_COMMENT',
        isRequired: true
    },
    shortBiography: {
        domain: 'DO_COMMENT',
        isRequired: true
    },
    sex: {
        domain: 'DO_CODE',
        isRequired: true
    },
    photoURL: {
        domain: 'DO_URL',
        isRequired: false
    },
    birthDate: {
        domain: 'DO_DATE',
        isRequired: false
    },
    birthPlace: {
        domain: 'DO_LAST_NAME',
        isRequired: false
    },
    activity: {
        domain: 'DO_LABEL_LONG',
        isRequired: false
    },
    movies: {
        domain: 'DO_COMMENT',
        isRequired: false
    },
    movieLinks: {
        domain: 'DO_COMMENT',
        redirect: ['movieLink']
    }
};
