import {combineReducers} from 'redux';
import ranking from './ranking';
import { identity, biography as person, movieLink } from './person' //TODO : remove as person when pierr will correct the bug

export const personMovieLinksSelector = state => state.dataset.movieLink;
export const rankingSelector = state => state.dataset.ranking;

export default combineReducers({
    //identity,
    //biography,
    person,
    movieLink,
    ranking
});
