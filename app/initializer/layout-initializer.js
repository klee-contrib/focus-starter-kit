import React from 'react';
import FocusCore from 'focus-core';
import FocusComponents from 'focus-components';
import render from 'focus-core/application/render';
import Layout from 'focus-components/components/layout';
import ConfirmWrapper from 'focus-components/components/confirm';
import DemoMenuLeft from '../views/menu/menu-left';

export default () => {
    render(Layout, `.${__ANCHOR_CLASS__}`, {
        props: {
            MenuLeft: DemoMenuLeft
        }
    });
}
