import {setRouterFunction} from 'focus-core/router/router';
import Backbone from 'backbone';

export default () => {
    setRouterFunction(Backbone.Router);
}
