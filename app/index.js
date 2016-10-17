import 'babel-preset-focus/dist/focus-polyfill';

import focusDemoConf from '../package.json';
import focusApplicationConf from 'focus-application/package.json';
import focusComponentsConf from 'focus-components/package.json';
import focusGraphConf from 'focus-graph/package.json';
import focusSearchConf from 'focus-search/package.json';
import reactConf from 'react/package.json';
import reactDomConf from 'react-dom/package.json';
import reactReduxConf from 'react-redux/package.json';
import reactRouterConf from 'react-router/package.json';
import reduxConf from 'redux/package.json';

import upperCase from 'lodash/upperCase';

console.info(
    `
        ------------------------------------------------
        ${upperCase(focusDemoConf.name)}
        version             ${focusDemoConf.version}
        web                 http://getfocus.io
        ------------------------------------------------
        focus-application   ${focusApplicationConf.version}
        focus-components    ${focusComponentsConf.version}
        focus-graph         ${focusGraphConf.version}
        focus-search        ${focusSearchConf.version}

        react               ${reactConf.version}
        react-dom           ${reactDomConf.version}
        react-router        ${reactRouterConf.version}
        redux               ${reduxConf.version}
        react-redux         ${reactReduxConf.version}
    `
);

// initializers before DOM CONTENT LOADED
const beforeDomContentLoadedScript = require('./initializer/before');
beforeDomContentLoadedScript.initialize();

// initializers after DOM CONTENT LOADED
const onDOMContentLoaded = () => {
    const afterDomContentLoadedScript = require('./initializer/after');
    afterDomContentLoadedScript.initialize();
    require('./start-app');
};

window.onDOMContentLoaded = onDOMContentLoaded;

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);

//import app demo styles
import './styles';
