import history from 'focus-core/history';
import {registerRoutes} from './router';
import routes from './router2/routes';

export default function startApp() {
    //Start the application.
    console.log('Loading all the routes...');

    // Useless with react-router
    //registerRoutes();


    console.log('All the routes are loaded...');

    //Start the router.
    history.start();
}
