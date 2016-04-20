import fetch from 'focus-core/network/fetch';
import personUrl from '../config/server/persons';
import omit from 'lodash/object/omit';

export default {
    loadPerson(id) {
        console.log(`[PERSON] call loadPerson(${id}) method`);
        return fetch(personUrl.load({urlData: {id}}), {isCORS: true});
    },
    loadPersonMovies(id) {
        console.log(`[PERSON] call loadPersonMovies(${id}) method`);
        return fetch(personUrl.load({urlData: {id}}), {isCORS: true}).then((data) => {
            if(data && data.movieLinks) {
              return data.movieLinks
            }
            return [];
        });
    },
    updatePersonBiography(data) {
        const personId = data.id;
        console.log(`[PERSON] call savePersonBiography method. data=${JSON.stringify(data)}`);
        const newData = omit(data, ['movieLinks']);
        return fetch(personUrl.update({urlData: {id: personId}, data: newData}), {isCORS: true});
    },
    updatePersonIdentity(data) {
        const personId = data.id;
        console.log(`[PERSON] call savePersonIdentity method. data=${JSON.stringify(data)}`);
        const newData = omit(data, ['movieLinks']);
        return fetch(personUrl.update({urlData: {id: personId}, data: newData}), {isCORS: true});
    }
}
