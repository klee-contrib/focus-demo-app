import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router';
import { Provider as StoreProvider } from 'react-redux';
import routes from './router/routes';

const Application = ({history, store}) =>
    <StoreProvider store={store}>
        <Router history={history} routes={routes} />
    </StoreProvider>
;

Application.displayName = 'Application';
export default Application;
