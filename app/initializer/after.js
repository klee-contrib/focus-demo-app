////////////////////////////////////////////////////////
/// SCRIPT EXECUTED AFTER DOM CONTENT LOADED
////////////////////////////////////////////////////////
import React from 'react';
import storesInitializer from './scripts/stores-initializer';
import userInitializer from './scripts/user-initializer';
import headerInitializer from './scripts/header-initializer'
// import layoutInitializer from './scripts/layout-initializer';
//import globalLinkInitializer from './scripts/global-link-initializer';


/**
 * Launches initializers that has to be loaded after DOM content is loaded.
 */
export const initialize = () => {
    console.info('[INITIALIZER - AFTER CONTENT LOADED]');
    storesInitializer();
    userInitializer();
    headerInitializer();
    //layoutInitializer();
    //globalLinkInitializer();
};
