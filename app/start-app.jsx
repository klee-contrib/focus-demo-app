import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import Application from './application';

import { browserHistory } from 'react-router';
import store from './stores';

console.log('Launching the app...');
const rootEl = document.querySelector('.demo-app');
render(
    <Application history={browserHistory} store={store} />,
    rootEl
);

// if (module.hot) {
//     console.log('hot accepted.')
//     module.hot.accept('./application', () => {
//         console.log('--> HOT RELOAD ACCEPTED');
//
//         // If you use Webpack 2 in ES modules mode, you can
//         // use <App /> here rather than require() a <NextApp />.
//         const NextApp = require('./application').default;
//         render(
//             <AppContainer>
//                 <Application history={browserHistory} store={store} />
//             </AppContainer>,
//             rootEl
//         );
//     });
// }
