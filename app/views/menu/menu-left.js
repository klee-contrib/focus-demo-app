import React from 'react';
import Menu from 'focus-components/components/menu';

const menuItems = [
    { icon:'home', route: 'home'},
    { icon:'search', onClick:function() { console.log('I click here search'); } }
];

function DemoMenuLeft() {
    return (
        <Menu items={menuItems} />
    );
}

DemoMenuLeft.displayName = 'DemoMenuLeft';
export default DemoMenuLeft;
