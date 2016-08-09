import {reducerBuilder} from 'focus-graph/reducers/reducer-builder';
import {combineReducers} from 'redux';
import {
    loadBiographyTypes,
    saveBiographyTypes,
    loadIdentityTypes,
    saveIdentityTypes
} from '../action/person';

// Données initiales pour la state redux
const DEFAULT_DATA = {};

const identity = reducerBuilder({
    name: 'identity', //put here the name of the action
    loadTypes: loadIdentityTypes,
    saveTypes: saveIdentityTypes,
    defaultData: DEFAULT_DATA
});

const biography = reducerBuilder({
    name: 'biography', //put here the name of the action
    loadTypes: loadBiographyTypes,
    saveTypes: saveBiographyTypes,
    defaultData: DEFAULT_DATA
});


export default combineReducers({
    biography,
    identity
});
