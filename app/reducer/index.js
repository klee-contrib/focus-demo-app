import {combineReducers} from 'redux';
import ranking from './ranking';
import person from './person'

export const personSelector = state => state.dataset.person;
export const rankingSelector = state => state.dataset.ranking;

export default combineReducers({
    person,
    ranking
});
