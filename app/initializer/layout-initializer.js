const render = Focus.application.render;
const Layout = Focus.components.application.layout.component;
const MenuLeft = require('../views/menu');

render(Layout, 'body', {
    props: {MenuLeft}
});
