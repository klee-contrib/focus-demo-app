import movieServices from '../services/movie';
import {actionBuilder as actionBuilder2} from 'focus-graph/actions/entity-actions-builder';

//---------- CARACTERISTICS
const _loadCaracteristicsAction = actionBuilder2({names: ['movie'], type:'load', service: movieServices.loadMovie});
export const loadCaracteristicsTypes = _loadCaracteristicsAction.types;
export const loadCaracteristicsAction = _loadCaracteristicsAction.action;

const _saveCaracteristicsAction = actionBuilder2({names: ['movie'], type:'save', service: movieServices.updateMovieCaracteristics});
export const saveCaracteristicsTypes = _saveCaracteristicsAction.types;
export const saveCaracteristicsAction = _saveCaracteristicsAction.action;

//---------- SYNOPSIS
const _loadSynopsisAction = actionBuilder2({names: ['movie'], type:'load', service: movieServices.loadMovie});
export const loadSynopsisTypes = _loadSynopsisAction.types;
export const loadSynopsisAction = _loadSynopsisAction.action;

const _saveSynopsisAction = actionBuilder2({names: ['movie'], type:'save', service: movieServices.updateMovieSynopsis});
export const saveSynopsisTypes = _saveSynopsisAction.types;
export const saveSynopsisAction = _saveSynopsisAction.action;

//---------- SYNOPSIS
const _loadTrailerAction = actionBuilder2({names: ['movie'], type:'load', service: movieServices.loadMovie});
export const loadTrailerTypes = _loadTrailerAction.types;
export const loadTrailerAction = _loadTrailerAction.action;

//---------- CASTING
const _loadCastingAction = actionBuilder2({names: ['moviePeople'], type:'load', service: movieServices.loadMovieCasting});
export const loadCastingTypes = _loadCastingAction.types;
export const loadCastingAction = _loadCastingAction.action;


// export const castingActions = {
//     loadPeople: actionBuilder({
//         node: 'movieCasting',
//         service: movieServices.loadMovieCasting,
//         shouldDumpStoreOnActionCall: true,
//         status: 'loaded'
//     })
// }
