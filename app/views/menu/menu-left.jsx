import React from 'react';
import Menu from 'focus-components/components/menu';

const menuItems = [
    { icon:'home', onClick:function() { Backbone.history.navigate(`/`, true) } },
    { icon:'search', onClick:function() { console.log('I click here search'); } }
];

function DemoMenuLeft() {
    return (
        <Menu items={menuItems} />
    );
}

DemoMenuLeft.displayName = 'DemoMenuLeft';
export default DemoMenuLeft;
