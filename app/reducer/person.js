import {reducerBuilder} from 'focus-redux/reducers/reducer-builder';
import {
    loadBiographyTypes,
    saveBiographyTypes,
    loadIdentityTypes,
    saveIdentityTypes
} from '../action/person';

// Données initiales pour la state redux
const DEFAULT_DATA = {};

const identityReducer = reducerBuilder({
    name: 'person',
    loadTypes: loadIdentityTypes,
    saveTypes: saveIdentityTypes,
    defaultData: DEFAULT_DATA
});

const biographyReducer = reducerBuilder({
    name: 'person',
    loadTypes: loadBiographyTypes,
    saveTypes: saveBiographyTypes,
    defaultData: DEFAULT_DATA
});

export default biographyReducer;
