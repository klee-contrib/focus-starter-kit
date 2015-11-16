import FocusCore from 'focus-core';
import FocusComponents from 'focus-components';
import render from 'focus-core/application/render';
import Layout from 'focus-components/components/layout';
import DemoMenuLeft from '../views/menu/MenuLeft';

render(Layout, '[data-focus="application"]', {
    props: {
        MenuLeft: DemoMenuLeft
    }
});
