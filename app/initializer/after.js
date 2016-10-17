////////////////////////////////////////////////////////
/// SCRIPT EXECUTED AFTER DOM CONTENT LOADED
////////////////////////////////////////////////////////
//import storesInitializer from './scripts/stores-initializer';
import userInitializer from './scripts/user-initializer';
//import headerInitializer from './scripts/header-initializer'
//import routerInitializer from './scripts/router-initializer'

/**
 * Launches initializers that has to be loaded after DOM content is loaded.
 */
export const initialize = () => {
    console.info('[INITIALIZER - AFTER CONTENT LOADED]');
    //storesInitializer();
    userInitializer();
    //headerInitializer();
    //routerInitializer();
};
