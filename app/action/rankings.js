import rankingsService from '../services/rankings';
import {actionBuilder} from 'focus-redux/actions/entity-actions-builder';

const _loadDateRanking = actionBuilder({
    names: ['movie_rankings_date'],
    type: 'load',
    service: rankingsService.loadDateRanking
});


const _loadMarkRanking = actionBuilder({
    names: ['movie_rankings_mark'],
    type: 'load',
    service: rankingsService.loadMarkRanking
});

//types
export const LOAD_DATE_RANKING_TYPE = _loadDateRanking.types.RESPONSE_LOAD_MOVIE_RANKINGS_DATE;
export const LOAD_MARK_RANKING_TYPE = _loadMarkRanking.types.RESPONSE_LOAD_MOVIE_RANKINGS_MARK;

//actions
export const loadDateRankingAction = _loadDateRanking.action;
export const loadMarkRankingAction = _loadMarkRanking.action;
