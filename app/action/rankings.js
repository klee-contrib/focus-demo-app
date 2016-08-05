import rankingsService from '../services/rankings';
import {actionBuilder} from 'focus-graph/actions/entity-actions-builder';

// DATE rankings
const _loadDateRanking = actionBuilder({
    names: ['ranking_date'],
    type: 'load',
    service: rankingsService.loadDateRanking
});
export const loadDateRankingTypes = _loadDateRanking.types;
export const loadDateRankingAction = _loadDateRanking.action;

// MARK rankings
const _loadMarkRanking = actionBuilder({
    names: ['ranking_mark'],
    type: 'load',
    service: rankingsService.loadMarkRanking
});
export const loadMarkRankingTypes = _loadMarkRanking.types;
export const loadMarkRankingAction = _loadMarkRanking.action;
