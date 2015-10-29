import React from 'react';
import FocusComponents from 'focus-components';
const MenuLeft = FocusComponents.components.MenuLeft;

var menuItems = [
    {icon:'search', onClick:function(){console.log('I click here search')}, name: 'Search'}
];

export default React.createClass({
    displayName: 'DemoMenuLeft',
    render() {
        return (
            <div>
                <MenuLeft items={menuItems} />
            </div>
        );
    }
});
