import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router';
import routes from './router/routes';

export default function startApp() {
    console.log('Launching the app...');
    render(
        (
            <Router history={hashHistory} routes={routes}/>
        ),
        document.getElementsByClassName(`${__ANCHOR_CLASS__}`)[0]
    );
}
