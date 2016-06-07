import {setRouterFunction} from 'focus-core/router/router';
import {setNavigationFunctions} from 'focus-core/history';
import Backbone from 'backbone';

export default () => {
    setNavigationFunctions(Backbone.history.navigate.bind(Backbone.history), Backbone.history.history.back.bind(Backbone.history.history), Backbone.history.start.bind(Backbone.history));
}
