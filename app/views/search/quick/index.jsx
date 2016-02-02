import React from 'react';
import {component as QuickSearch} from 'focus-components/page/search/quick-search';
import {configuration} from './configuration';

export default React.createClass({
    displayName: 'QuickSearchView',

    render(){
        return (
            <div data-demo="quick-search-view">
                <h5>Recherche rapide</h5>
                <QuickSearch {...configuration} />
            </div>
        );
    }
});
