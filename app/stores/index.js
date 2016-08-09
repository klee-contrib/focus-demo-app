import createStore from 'focus-graph/store/create-store';
import rootReducer from '../reducer';
import DevTools from '../tools/dev-tools';

const store = createStore({dataset: rootReducer}, [], [DevTools.instrument()]);

export default store;
