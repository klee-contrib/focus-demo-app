import builder from 'focus-redux/store/builder';
import rootReducer from '../reducer';
import DevTools from '../containers/dev-tools';

const store = builder(rootReducer);

export default store;
