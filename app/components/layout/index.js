import React from 'react';
import Layout from 'focus-components/components/layout';
import DemoMenuLeft from '../../views/menu/menu-left';
import DemoFooter from '../../views/footer';
import DevTools from '../../tools/dev-tools';

const AppLayout = (props) => (
    <div>
        <Layout MenuLeft={DemoMenuLeft} Footer={DemoFooter}>
            {props.children}
        </Layout>
        <DevTools />
    </div>
)

export default AppLayout;
