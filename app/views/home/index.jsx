import React from 'react';
import history from 'focus-core/history';
import CoreStore from 'focus-core/store/CoreStore';
import FocusDevTools from 'focus-dev-tools';

// web components
import {cartridgeBehaviour} from 'focus-components/page/mixin';
import Rankings from './rankings';
import DemoTitle from '../components/demo-title';

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
            barLeft: {
                component: DemoTitle
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
            <div data-demo='homepage'>
                <Rankings/>
                <FocusDevTools
                  isPanel={true} /* If you want to embed the component in a DOck */
                  user='Pierre' /*can be set by an env variable*/
                  project='focus_demo' /*can be set by an env variable*/
                  toggleVisibilityKey='ctrl-m'  /*How do you want to display the dev tool*/
                  routes={history.handlers}  /* A list of all your routes (`focus-core/router/history`)*/
                  stores={CoreStore._instances} /* A list of all your stores (`focus-core/CoreStore._instances`)*/
                  isDebugDevTools={false} /* If you want to display the dev tools props (not usefull for the projects)*/
                />
            </div>
        );
    }
});
