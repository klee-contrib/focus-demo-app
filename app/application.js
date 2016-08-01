import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router';
import { Provider as StoreProvider } from 'react-redux';

import applicationStore from './stores';
import routes from './router/routes';

const Application = ({history, routes, store}) =>
    <StoreProvider store={store}>
        <Router history={history} routes={routes} />
    </StoreProvider>
;


export default function startApp() {
    console.log('Launching the app...');
    render(
        <Application history={browserHistory} routes={routes} store={applicationStore} />,
        document.getElementsByClassName(`${__ANCHOR_CLASS__}`)[0]
    );
}
