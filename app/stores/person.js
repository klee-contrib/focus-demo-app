import {CoreStore} from 'focus-core/store';

/**
* Store dealing with subjects about persons.
* @type {focus}
*/
const personStore = new CoreStore({
    definition: {
        personIdentity: 'personIdentity',
        personBiography: 'personBiography',
        personMovieLinks: 'personMovieLinks'
    }
});

export default personStore;
