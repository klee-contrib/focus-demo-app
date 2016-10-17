import {combineReducers} from 'redux';
import ranking from './ranking';
import { identity, biography as person, movieLink } from './person' //TODO : remove as person when pierr will correct the bug
import movie, {casting as moviePeople} from './movie';

export const personMovieLinksSelector = state => state.dataset.movieLink;
export const rankingSelector = state => state.dataset.ranking;

export default combineReducers({
    //identity,
    //biography,
    moviePeople,
    movie,
    movieLink, //TODO : to move into person reducers https://github.com/get-focus/focus-graph/issues/52
    person,
    ranking
});
