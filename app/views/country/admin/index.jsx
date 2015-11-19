import React, {Component} from 'react';
import dispatcher from 'focus-core/dispatcher';
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
function _searchCountrySvc(criteria) {
    console.log('criteria', criteria);
    let fakeData = [];
    for(let i = 0; i < 150; i++) {
        fakeData.push({
            id: i,
            name: `Country ${i}`
        })
    }
    const begin = criteria.urlData.skip;
    const end = begin + criteria.urlData.top;
    return Promise.resolve(fakeData.slice(begin, end))
    .then(d => {return {dataList: d, totalCount: fakeData.length};})
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
                searchSvc={_searchCountrySvc}
                store={_countryListStore}
            />
            </div>
        );
    }
}

CountryAdminPage.displayName = CountryAdminPage;

export default CountryAdminPage;
