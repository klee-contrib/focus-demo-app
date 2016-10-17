// import fetch from 'focus-core/network/fetch';
import rankingUrls from '../config/server/rankings';

export default {
    loadDateRanking() {
        console.log(`[MOVIE DATE RANKING] call`);
        // return fetch(rankingUrls.dateRanking({}), {isCORS: true});
    },
    loadMarkRanking() {
        console.log(`[MOVIE MARK RANKING] call`);
        // return fetch(rankingUrls.markRanking({}), {isCORS: true});
    }
}
