import builder from 'focus-redux/store/builder';
import rootReducer from '../reducer';
import DevTools from '../tools/dev-tools';

const store = builder(rootReducer, [], [DevTools.instrument()]);

export default store;
