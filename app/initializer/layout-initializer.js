const render = FocusCore.application.render;
const Layout = FocusComponents.components.Layout;
const MenuLeft = FocusComponents.components.MenuLeft;

render(Layout, '[data-focus="application"]', {
    props: {MenuLeft}
});
