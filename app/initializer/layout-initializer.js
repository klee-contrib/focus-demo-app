import React from 'react';
import render from 'focus-core/application/render';
import Layout from 'focus-components/components/layout';

export default () => {
    render(Layout, `.${__ANCHOR_CLASS__}`, {
        props: {
            MenuLeft: () => <div>Menu Left EMPTY</div>
        }
    });
}
