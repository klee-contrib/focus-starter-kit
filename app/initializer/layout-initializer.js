const render = FocusCore.application.render;
const Layout = FocusComponents.application.layout.component;
const MenuLeft = require('../views/menu');

render(Layout, 'body', {
    props: {MenuLeft}
});
