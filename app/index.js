import 'babel-preset-focus/dist/focus-polyfill';

import focusDemoConf from '../package.json';
import focusCoreConf from 'focus-core/package.json';
import focusComponentsConf from 'focus-components/package.json';

require.ensure(['./sw'], require => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('http://localhost:3000/1.focus-demo-app.js'/*, { scope: '/sw-test/' }*/).then(reg => {

          if(reg.installing) {
              console.log('Service worker installing');
          } else if(reg.waiting) {
              console.log('Service worker installed');
          } else if(reg.active) {
              console.log('Service worker active');
          }

      }).catch(error => {
          // registration failed
          console.log('Registration failed with ' + error);
      });
    }

  }, 'sw');



console.info(
    `
        FOCUS DEMO
        version: ${focusDemoConf.version}
        focus-core: ${focusCoreConf.version}
        focus-components: ${focusComponentsConf.version}
        web: http://getfocus.io
    `
);

console.log('#########################[INIT]#######################################');
// initializers before DOM CONTENT LOADED
const beforeDomContentLoadedScript = require('./initializer/before');
beforeDomContentLoadedScript.initialize();

// initializers after DOM CONTENT LOADED
const onDOMContentLoaded = () => {
    const afterDomContentLoadedScript = require('./initializer/after');
    afterDomContentLoadedScript.initialize();
    console.log('#########################[START APP]############################');
    require('./application')();
    console.log('#########################[APP STARTED]##########################');
};

window.onDOMContentLoaded = onDOMContentLoaded;

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);

//import app demo styles
import './styles';
