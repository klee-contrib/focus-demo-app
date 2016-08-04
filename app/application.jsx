import React, {PropTypes, Component} from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router';
import { Provider as StoreProvider } from 'react-redux';
import routes from './router/routes';

const propTypes = {
    history: PropTypes.func,
    store: PropTypes.object
};

//to make hot reload work, we have to write Application as a Component.
class Application extends Component {
    render() {
        const {history, store} = this.props;
        return (
            <StoreProvider store={store}>
                <Router history={history} routes={routes} />
            </StoreProvider>
        );
    }
}

//Application.propTypes = propTypes;
Application.displayName = 'Application';
export default Application;
