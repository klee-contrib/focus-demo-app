import movieServices from '../services/movie';
import actionBuilder from 'focus-core/application/action-builder';

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

const _saveSynopsisAction = actionBuilder2({names: ['movie'], type:'save', service: movieServices.updateMovieCaracteristics});
export const saveSynopsisTypes = _saveSynopsisAction.types;
export const saveSynopsisAction = _saveSynopsisAction.action;



export const castingActions = {
    loadPeople: actionBuilder({
        node: 'movieCasting',
        service: movieServices.loadMovieCasting,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    })
}

export const synopsisActions = {
    load: actionBuilder({
        node: 'movieSynopsis',
        service: movieServices.loadMovie,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    }),
    save: actionBuilder({
        node: 'movieSynopsis',
        service: movieServices.updateMovieSynopsis,
        shouldDumpStoreOnActionCall: false,
        status: 'saved'
    })
}

export const trailerActions = {
    load: actionBuilder({
        node: 'movieTrailer',
        service: movieServices.loadMovie,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    })
}
