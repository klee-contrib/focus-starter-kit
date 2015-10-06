// Dependencies

const {types} = FocusCore.component;

// Mixins

const menuMixin = FocusComponents.application.menu.mixin;

// Components

const Menu = React.createClass({
    displayName: 'menu',
    mixins: [menuMixin],
    propTypes: {
        links: types('array'),
        type: types('string')
    },
    renderContent() {
        const {links, type} = this.props;
        if ('menuLeft' === type) {
            return links.map((link) => {
                if (!link.img) {
                    return <a href={link.url}>link.title</a>;
                } else {
                    return <a href={link.url}><img src={link.img}/></a>;
                }
            });
        }
        return this.renderLinks();
    }
});


const Wrapper = React.createClass({
    displayName: 'menu-wrapper',
    _getItems() {
        return ([
            {
                icon: 'home',
                route: 'home',
                name: 'Home',
                onClick: this._closeQuickSearchPopin
            },
            {
                icon: 'search',
                name: 'Search',
                onClick: this._toggleQuickSearchPopin
            }
        ]);
    },
    _toggleQuickSearchPopin() {

    },
    _closeQuickSearchPopin() {

    },
    render() {
        return (
            <div>
                <Menu
                    direction='vertical'
                    items={this._getItems()}
                    open={true}
                    position='left'
                    ref='menu'
                    title=''
                />
            </div>
        );
    }
});

module.exports = Wrapper;
