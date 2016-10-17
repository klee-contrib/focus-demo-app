import {reducerBuilder} from 'focus-graph/reducers/reducer-builder';
// import {combineReducers} from 'redux';
import {
    loadCaracteristicsTypes,
    saveCaracteristicsTypes,
    loadCastingTypes,
    loadTrailerTypes,
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

const trailer = reducerBuilder({
    name: 'movie', //put here the name of the action
    loadTypes: loadTrailerTypes,
    saveTypes: loadTrailerTypes, //to correct with issue https://github.com/get-focus/focus-graph/issues/59
    defaultData: DEFAULT_DATA
});

export const casting = reducerBuilder({
    name: 'moviePeople', //put here the name of the action
    loadTypes: loadCastingTypes,
    saveTypes: loadCastingTypes, //to correct with issue https://github.com/get-focus/focus-graph/issues/59
    defaultData: DEFAULT_DATA
});

export default trailer;
