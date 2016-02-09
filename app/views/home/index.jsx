import React from 'react';
import application from 'focus-core/application';
import history from 'focus-core/history';

// web components
import {cartridgeBehaviour} from 'focus-components/page/mixin';
import Rankings from './rankings';

//cartridge configuration
import CartridgePageSearch from 'focus-components/page/search/search-header/cartridge';
import SummaryPageSearch from 'focus-components/page/search/search-header/summary';
import searchService from '../../services/search';

export default React.createClass({
    displayName: 'HomeView',
    mixins: [cartridgeBehaviour],
    /** @inheritDoc */
    _navigateAdvancedSearch() {
        history.navigate('#search/advanced', true);
    },

    /**
    * Related to the CartridgeBehaviour.
    * Define the cartridge configuration.
    * @return {[type]} [description]
    */
    cartridgeConfiguration() {
        return {
            summary: {
                component: SummaryPageSearch,
                props: { onSearchCriteriaChangeByUser: this._navigateAdvancedSearch, service: searchService }
            },
            cartridge: {
                component: CartridgePageSearch,
                props: { onSearchCriteriaChangeByUser: this._navigateAdvancedSearch, service: searchService }
            },
            actions: {
                primary: [],
                secondary: []
            }
        };
    },

    /** @inheritDoc */
    render() {
        return (
            <div data-role='homepage'>
                <div data-role='background-overlay'/>
                <Rankings/>
            </div>
        );
    }
});
