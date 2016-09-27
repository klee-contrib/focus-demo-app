import {actionSearchBuilder} from 'focus-search/actions/action-search-builder'
import {singleActionCreatorBuilder} from 'focus-search/actions/single-action-creator'
import {unitSearchReducerBuilder} from 'focus-search/reducer'
import {searchTriggerMiddlewareBuilder} from 'focus-search/middleware/middleware-search';

import {search as serviceSearch} from '../services/search';

//advanced_search
export const searchAction = actionSearchBuilder({name: 'advancedSearch', type: 'search', service: serviceSearch});
export const {creators : unitSearchActions, types : unitSearchActionsTypes} = singleActionCreatorBuilder('advancedSearch');
export const unitSearchReducers = unitSearchReducerBuilder('advancedSearch')
export const middlewareAdvancedSearch = searchTriggerMiddlewareBuilder([], state => state.advancedSearch, searchAction.action);



// export const otherSearchAction = actionSearchBuilder({name: 'other_search', type: 'search', service: serviceSearch});
// export const {creators : unitOtherSearchActions, types : unitOtherSearchTypes} = singleActionCreatorBuilder('advanced_search');
// export const unitOtherSearchReducers = unitSearchReducerBuilder('other_search')
// export const middlewareOtherSearch = searchTriggerMiddlewareBuilder(otherSearchAction.action, unitOtherSearchTypes);
