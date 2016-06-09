import DefaultLine from './line';
import MovieLine from './movie';
import PersonLine from './person';
import {scopesConfig} from '../../../config/scopes';

//TODO : à revoir avec Nicolas et Pierre
export default function lineComponentMapper(groupKey, list) {
    let newKey = groupKey;
    if (scopesConfig && groupKey && scopesConfig[groupKey]) {
        newKey = scopesConfig[groupKey];
    }
    switch (newKey) {
        //case 'Movies': return MovieLine;
        case 'movie': return MovieLine;
        //case 'Persons': return PersonLine;
        case 'person': return PersonLine;
        default: return DefaultLine;
    }
}
