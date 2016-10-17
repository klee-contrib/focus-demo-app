"use strict";
let webpackConfig = require('./webpack.config');
const serverLauncher = require('webpack-focus').serverLauncher;


/*****************************************
********* Webpack dev server *************
******************************************/
const customConfig = {
    proxy: null
};

webpackConfig.externals = undefined; // Remove externals to make the app run in the dev server
serverLauncher(webpackConfig, customConfig);
