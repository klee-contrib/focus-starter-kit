let cartridgeBehaviour = Focus.components.page.mixin.cartridgeBehaviour;
let CartridgeSearch = require('../common/cartridge-search');
let SummarySearch = require('../common/summary-search');

// Composants du cartouche

let ApplicationTitle = React.createClass({
    displayName: 'application-title',
    render() {
        return (
            <span className="page-title">TRACKIT</span>
        );
    }
});

let searchAction = require('action/search').search;

let navigateAdvancedSearch = () => {
    let query = Focus.search.builtInStore.queryStore.getQuery();
    let scope = Focus.search.builtInStore.queryStore.getScope();
    let route = `#search/advanced/scope/${scope}${query ? '/query/' + query : ''}`;
    return Backbone.history.navigate(route, true)
};

//Creates a View for hehe home page which is
let HomeView = React.createClass({
    mixins: [cartridgeBehaviour],
    cartridgeConfiguration() {
        let buildProps = {
            searchAction() {
                searchAction.apply(this, arguments);
                navigateAdvancedSearch.apply(this, arguments)
            },
            query: this.props.query,
            scope: this.props.scope, //Scope all by default?
            referenceNames: ['scopes']
        };
        return {
            barLeft: {component: ApplicationTitle},
            summary: {
                component: Focus.components.page.search.searchHeader.summary,
                props: buildProps
            },
            cartridge: {
                component: Focus.components.page.search.searchHeader.cartridge,
                props: buildProps
            },
            actions: {
                primary: [],
                secondary: []
            }
        };
    },
    render() {
        return (
            <div className="homepage"></div>
        );
    }
});
module.exports = HomeView;
