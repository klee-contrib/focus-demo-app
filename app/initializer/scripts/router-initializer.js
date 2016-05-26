import {setRouterFunction} from 'focus-core/router/router';
import {setNavigationFunctions} from 'focus-core/history';
import Backbone, {history} from 'backbone';

export default () => {
    setRouterFunction(Backbone.Router);
    setNavigationFunctions(history.navigate, history.history.back);
}
