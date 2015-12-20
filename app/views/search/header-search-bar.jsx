//librairies
import React, {PropTypes} from 'react';
import i18n from 'i18next-client';

//web components
import {summary as SearchBar} from 'focus-components/page/search/search-header'; // this components embed references, stores and actions

import searchServices from '../../services/search';

export default React.createClass({
    displayName: 'HeaderSearchBar',
    propTypes: {
        onSearchCriteriaChange: PropTypes.func
    },

    render() {
        const {onSearchCriteriaChange} = this.props;
        return (
            <div data-demo='header-search-bar'>
                <h2>{i18n.t('header.search.title')}</h2>
                <SearchBar onSearchCriteriaChange={onSearchCriteriaChange} service={searchServices} placeholder={i18n.t('search.bar.placeholder')} />
            </div>
        );
    }
});
