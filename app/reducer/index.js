import {combineReducers} from 'redux';
import rankings from './rankings-reducer';

export const rankingSelector = state => state.dataset.rankings;

export default combineReducers({
    rankings
});
