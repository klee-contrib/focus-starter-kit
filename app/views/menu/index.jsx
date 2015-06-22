// Mixins
let menuMixin = Focus.components.application.menu.mixin;

// Components

let Popin = Focus.components.application.popin.component;

let Menu = React.createClass({
    mixins: [menuMixin],
    renderContent() {
        if (this.props.type === 'menuLeft') {
            return this.props.links.map(function (link) {
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


let Wrapper = React.createClass({
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
            },/*
            {
                icon: 'video-camera',
                route: '',
                onClick: this._closeQuickSearchPopin
            },
            {
                icon: 'user',
                route: '',
                onClick: this._closeQuickSearchPopin
            },
            {
                icon: 'cog',
                route: '',
                onClick: this._closeQuickSearchPopin
            },
            {
                icon: 'info-circle',
                route: '',
                onClick: this._closeQuickSearchPopin
            }*/
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
                    open={true}
                    position='left'
                    direction='vertical'
                    title=''
                    items={this._getItems()}
                    ref='menu'
                    >
                </Menu>
            </div>
        );
    }
});

module.exports = Wrapper;
