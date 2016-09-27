//import fetch from 'focus-core/network/fetch';

import commonUrl from '../config/server/common';
import moviesUrl from '../config/server/movies';
import personsUrl from '../config/server/persons';

export default {

    /**
     * Target search service call.
     * (This should the target : search service should be written this way.)
     *
     * @param  {object} config search call configuration.
     * @param  {string} scope  scope search
     * @return {object}        search response
     */
    search(config, scope) {
        switch (scope) {
            case 'movie':
                console.log(`[SEARCH MOVIE] config: ${JSON.stringify(config)}`);
                //return fetch(moviesUrl.search(config)).then(this._legacyfyServerResult);
            case 'person':
                console.log(`[SEARCH PERSON] config: ${JSON.stringify(config)}`);
                //return fetch(personsUrl.search(config)).then(this._legacyfyServerResult);
            default:
                console.log(`[SEARCH ALL] config: ${JSON.stringify(config)}`);
                //return fetch(commonUrl.search(config)).then(this._legacyfyServerResult);
        }
    },

    // /**
    // * Search with scope.
    // * @param  {Object} AdvancedSearch config that launches the call of this service
    // * @return {Promise}
    // */
    // scoped(config) {
    //     const {criteria} = config.data;
    //     const {scope} = criteria;
    //     return this._search(config, scope);
    // },
    // /**
    // * Search without scope.
    // * @param  {Object} AdvancedSearch config that launches the call of this service
    // * @return {Promise}
    // */
    // unscoped(config) {
    //     return this._search(config);
    // }
};
