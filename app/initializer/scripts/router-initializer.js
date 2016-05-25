import {setRouterFunction} from 'focus-core/router/router';
import {setNavigationFunctions} from 'focus-core/history';
import history from 'focus-core/history/history';
import Backbone from 'backbone';

export default () => {
    // setRouterFunction(Backbone.Router);
    setNavigationFunctions(history.navigate, history.history.back);
}
