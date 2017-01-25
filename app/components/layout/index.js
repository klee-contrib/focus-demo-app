import React from 'react';
import Layout from 'focus-components/components/layout';
import DemoMenuLeft from '../../views/menu/menu-left';
import DemoFooter from '../../views/footer';
import DevTools from '../../components/dev-tools';
import {withRouter} from 'react-router';

const DemoMenu = React.createClass({
    render() {
        return(
            <DemoMenuLeft history={this.props.router} />
        )
    }
})

const AppLayout = (props) => (
    <div>
        <Layout MenuLeft={withRoute(Menu)} Footer={DemoFooter}>
            {props.children}
        </Layout>
        {/*<DevTools/>*/}
    </div>
)

export default AppLayout;
