import fetch from 'focus-core/network/fetch';
import {loadDemoURL} from '../config/server/demo';

export function loadDemo(id) {
        console.log(`[MOVIE] call loadDemo(${id}) method`);
        return fetch(loadDemoURL({urlData: {id}}), {isCORS: true});
}
