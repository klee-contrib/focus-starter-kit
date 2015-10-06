// Mixins

const cartridgeBehaviour = FocusComponents.page.mixin.cartridgeBehaviour;

// Services

const service = require('../../services/search');

// Components

const ApplicationTitle = require('./application-title');

let initializationCallsCount = 4;

const navigateAdvancedSearch = () => {
    if (0 === initializationCallsCount) {
        const route = '#search/advanced';
        Backbone.history.navigate(route, true);
    } else {
        initializationCallsCount--;
    }
};

const HomeView = React.createClass({
    displayName: 'HomeView',
    mixins: [cartridgeBehaviour],
    cartridgeConfiguration() {
        const buildProps = {
            service,
            onSearchCriteriaChange: navigateAdvancedSearch
        };
        return {
            barLeft: {component: ApplicationTitle},
            summary: {
                component: FocusComponents.page.search.searchHeader.summary,
                props: buildProps
            },
            cartridge: {
                component: FocusComponents.page.search.searchHeader.cartridge,
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
