import createStore from 'focus-graph/store/create-store';
import rootReducer from '../reducer';
import DevTools from '../tools/dev-tools';

import messageReducer from 'focus-application/messages/messages-reducer';
import headerReducer from 'focus-application/header/header-reducer';
import confirmReducer from 'focus-application/confirm/confirm-reducer';
import fetchReducer from 'focus-application/fetch/fetch-reducer';

import {unitSearchReducers} from '../action/search';
import {middlewareAdvancedSearch, middlewareOtherSearch} from '../action/search';

export default createStore(
    {
        advancedSearch : unitSearchReducers,
        dataset: rootReducer,
        messages: messageReducer,
        header: headerReducer,
        confirm: confirmReducer,
        fetch: fetchReducer
    },
    [middlewareAdvancedSearch],
    [DevTools.instrument()]
);
