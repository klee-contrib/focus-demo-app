import {reducerBuilder} from 'focus-redux/reducers/reducer-builder';
import {
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

export default identityReducer;
