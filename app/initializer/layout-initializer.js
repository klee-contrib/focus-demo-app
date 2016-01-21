import React from 'react';
import FocusCore from 'focus-core';
import FocusComponents from 'focus-components';
import render from 'focus-core/application/render';
import Layout from 'focus-components/components/layout';
import ConfirmWrapper from 'focus-components/components/confirm';
import DemoMenuLeft from '../views/layout/menu-left';
import Footer from '../views/layout/footer';

render(Layout, `.${__ANCHOR_CLASS__}`, {
    props: {
        Footer,
        MenuLeft: DemoMenuLeft,
    }
});
