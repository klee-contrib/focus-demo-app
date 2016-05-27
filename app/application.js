import {registerRoutes} from './router';
import {start} from 'focus-core/router/router'

export default function startApp() {

    //Start the application.
    console.log('Loading all the routes...');
    registerRoutes();
    console.log('All the routes are loaded...');

    //Start the router.
    start();
}
