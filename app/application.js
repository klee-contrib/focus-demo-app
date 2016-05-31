import {registerRoutes} from './router';
import {start} from 'focus-core/history'

export default function startApp() {
    
    //Start the application.
    console.log('Loading all the routes...');
    registerRoutes();
    console.log('All the routes are loaded...');

    //Start the router.
    start();
}
