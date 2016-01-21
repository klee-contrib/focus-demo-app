import React from 'react';
import Backbone from 'backbone';
import Menu from 'focus-components/components/menu';

const menuItems = [
    { icon:'home', route: 'home'},
    { icon:'search', onClick:function() { console.log('I click here search'); } }
];

function onBrandClick () {
    Backbone.history.navigate('#', true);
}

function DemoMenuLeft() {
    return (
        <Menu items={menuItems} handleBrandClick={onBrandClick} />
    );
}

DemoMenuLeft.displayName = 'DemoMenuLeft';
export default DemoMenuLeft;
