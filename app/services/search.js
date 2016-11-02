import fetch from 'focus-core/network/fetch';

import commonUrl from '../config/server/common';
import moviesUrl from '../config/server/movies';
import personsUrl from '../config/server/persons';

import {parseForVertigo, getScope} from 'focus-search/store';


export default {

    /**
     * Target search service call.
     * (This should the target : search service should be written this way.)
     *
     * @param  {object} config search call configuration.
     * @param  {string} scope  scope search
     * @return {object}        search response
     */
    search(config) {
        switch (getScope(config)) {
            case 'MOVIE':
                console.log(`[SEARCH MOVIE] config: ${JSON.stringify(config)}`);
                if(config.sort){
                  return fetch(moviesUrl.searchSort(parseForVertigo(config)))
                }

                return fetch(moviesUrl.search(parseForVertigo(config)))
            case 'PERSON':
                console.log(`[SEARCH PERSON] config: ${JSON.stringify(config)}`);
                return fetch(personsUrl.search(parseForVertigo(config)))
            default:
                console.log(`[SEARCH ALL] config: ${JSON.stringify(config)}`);
                return fetch(commonUrl.search(parseForVertigo(config))).then(data =>{  return data} );
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
