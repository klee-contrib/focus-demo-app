import React from 'react';
import {DraggableIframe, Layout} from 'focus-components/components';
import DemoMenuLeft from '../../views/menu/menu-left';
import DemoFooter from '../../views/footer';
import DevTools from '../../components/dev-tools';

const AppLayout = (props) => (
    <div>
        <Layout MenuLeft={DemoMenuLeft} Footer={DemoFooter}>
            {props.children}
        </Layout>
        <DraggableIframe
            width={350}
            height={550}
            iframeUrl='http://localhost:1234/extension.html'
            title='view.help-center.title'
            toggleFunctionName='openHelpCenter'
            queryUrl={['#/query?url=', '&block=']}
        /> 
        {/*<DevTools/>*/}
    </div>
)

export default AppLayout;
