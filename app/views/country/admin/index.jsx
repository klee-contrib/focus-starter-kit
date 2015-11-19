import React, {Component} from 'react';
import dispatcher from 'focus-core/dispatcher';

import {loadCountryListByCriteria} from '../../../services/country';

import CountryList from './country-list';
import CountryDetail from './country-detail';
import CountryCriteria from './country-criteria';
import CountryActionBar from './country-action-bar';

import ListStore from 'focus-core/store/list';
const _countryListStore = new ListStore({identifier: 'country'});

function _dispatchSearchCriteria(query) {
    dispatcher.handleViewAction({
        data: {criteria: query},
        type: 'update',
        identifier: _countryListStore.identifier
    });
}

class CountryAdminPage extends Component {
    render() {
        const {detailId} = this.state || {};
        return (
            <div>
            <CountryCriteria onSearch={_dispatchSearchCriteria}/>
            <CountryActionBar />
            {detailId && <CountryDetail id={detailId}/>}
            <CountryList
                handleLineClick={(d) => this.setState({detailId: d.id})}
                searchSvc={loadCountryListByCriteria}
                store={_countryListStore}
            />
            </div>
        );
    }
}

CountryAdminPage.displayName = CountryAdminPage;

export default CountryAdminPage;
