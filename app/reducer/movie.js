import {reducerBuilder} from 'focus-graph/reducers/reducer-builder';
// import {combineReducers} from 'redux';
import {} from 'redux';
import {
    loadCaracteristicsTypes,
    saveCaracteristicsTypes,
    loadSynopsisTypes,
    saveSynopsisTypes
} from '../action/movie';


// Données initiales pour la state redux
const DEFAULT_DATA = {};

const caracteristics = reducerBuilder({
    name: 'movie', //put here the name of the action
    loadTypes: loadCaracteristicsTypes,
    saveTypes: saveCaracteristicsTypes,
    defaultData: DEFAULT_DATA
});

const synopsis = reducerBuilder({
    name: 'movie', //put here the name of the action
    loadTypes: loadSynopsisTypes,
    saveTypes: saveSynopsisTypes,
    defaultData: DEFAULT_DATA
});

export default synopsis;
