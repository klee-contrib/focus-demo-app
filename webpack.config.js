const configBuilder = require('webpack-focus').configBuilder;
const path = require('path');

const API_HOST = process.env.API_HOST || 'localhost';
const API_PORT = process.env.API_PORT || 80;
const LEGACY_SEARCH_API = JSON.parse(process.env.LEGACY_SEARCH_API);
const BASE_URL = process.env.BASE_URL ? process.env.BASE_URL : '';

// Check if focus libraries should be held locally or read from NPM
const localFocus = process.env.LOCAL_FOCUS ? JSON.parse(process.env.LOCAL_FOCUS) : false;

const customConfig = localFocus ? {
    resolve: {
        alias: {
            'focus-core': path.resolve(process.cwd(), '../focus-core'),
            'focus-components': path.resolve(process.cwd(), '../focus-components'),
            moment: path.resolve(process.cwd(), './node_modules/moment'),
            numeral: path.resolve(process.cwd(), './node_modules/numeral'),
            react: path.resolve(process.cwd(), './node_modules/react')
        }
    }
} : {};

const globals = {
    __API_ROOT__: JSON.stringify(`http://${API_HOST}:${API_PORT}/`),
    __LEGACY_SEARCH_API__: JSON.stringify(LEGACY_SEARCH_API),
    __BASE_URL__: `'${BASE_URL}'`
}

module.exports = configBuilder(customConfig, globals);
