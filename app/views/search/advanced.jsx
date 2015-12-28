import React, {PropTypes} from 'react';

// web components
import {cartridgeBehaviour} from 'focus-components/page/mixin';
import HeaderSearchBar from '../search/components/header-search-bar';

import {component as AdvancedSearch} from 'focus-components/page/search/advanced-search';
import CartridgePageSearch from 'focus-components/page/search/search-header/cartridge';
import SummaryPageSearch from 'focus-components/page/search/search-header/summary';

import searchServices from '../../services/search';

export default React.createClass({
    displayName: 'AdvancedSearch',
    mixins: [cartridgeBehaviour],
    propTypes: {
        keywords: PropTypes.string
    },

    /** @inheritDoc */
    componentWillMount() {
        this._registerCartridge();
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
                props: {service: searchServices}
            },
            cartridge: {
                component: CartridgePageSearch,
                props: {service: searchServices}
            },
            actions: {
                primary: [],
                secondary: []
            }
        };
    },

    render() {
        return <AdvancedSearch service={searchServices} />;
    }
});
