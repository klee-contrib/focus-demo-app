import {setRouterFunction} from 'focus-core/router/router';
import {setNavigationFunctions} from 'focus-core/history';
import {history} from 'backbone';

export default () => {
    setNavigationFunctions(history.navigate, history.history.back);

}
