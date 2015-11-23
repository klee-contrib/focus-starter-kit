import React from 'react';
import FocusComponents from 'focus-components';
const {MenuLeft} = FocusComponents.components;

const menuItems = [
    { icon:'home', onClick:function() { Backbone.history.navigate(`/`, true) } },
    { icon:'search', onClick:function() { console.log('I click here search'); } }
];

function DemoMenuLeft() {
    return (
        <MenuLeft items={menuItems} />
    );
}

DemoMenuLeft.displayName = 'DemoMenuLeft';
export default DemoMenuLeft;
