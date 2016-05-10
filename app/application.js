import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router';
import routes from './router2/routes';

export default function startApp() {
    console.log('Launching the app...');
    render(
        (
            <Router history={browserHistory} routes={routes}/>
        ),
        document.getElementsByClassName(`${__ANCHOR_CLASS__}`)[0]
    );
}
