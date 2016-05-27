import {setRouterFunction} from 'focus-core/router/router';
import {setNavigationFunctions} from 'focus-core/history';
import Backbone from 'backbone';

export default () => {
    setRouterFunction(Backbone.Router);
    setNavigationFunctions(Backbone.history.navigate, Backbone.history.history.back.bind(Backbone.history.history));
}
