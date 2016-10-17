import {reducerBuilder} from 'focus-graph/reducers/reducer-builder';
// import {combineReducers} from 'redux';
import {} from 'redux';
import {
    loadBiographyTypes,
    saveBiographyTypes,
    loadIdentityTypes,
    saveIdentityTypes,
    loadMovieLinksTypes
} from '../action/person';


// Données initiales pour la state redux
const DEFAULT_DATA = {
    movieLink: [],
};

export const identity = reducerBuilder({
    name: 'person', //put here the name of the action
    loadTypes: loadIdentityTypes,
    saveTypes: saveIdentityTypes,
    defaultData: DEFAULT_DATA
});

export const biography = reducerBuilder({
    name: 'person', //put here the name of the action
    loadTypes: loadBiographyTypes,
    saveTypes: saveBiographyTypes,
    defaultData: DEFAULT_DATA
});

//TODO : Ajouter les cas de chargement et d'erreur.
export const movieLink = (state = DEFAULT_DATA, action) => {
    switch(action.type) {
        case loadMovieLinksTypes.RESPONSE_LOAD_MOVIELINK:
            return { ...state, movieLink: action.payload };
        default:
            return state;
    }
};

//
// export default combineReducers({
//     biography
//     //movieLinks
// });
