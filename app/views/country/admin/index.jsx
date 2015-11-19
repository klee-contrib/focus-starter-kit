import React from 'react';
import CountryList from './country-list';
import CountryDetail from './country-detail';
import CountryCriteria from './country-criteria';
import CountryActionBar from './country-action-bar';

function _searchAction(value) {
    console.log('SEARCH triggered', value);
}

export default function CountryAdminPage(props) {
    return (
        <div>
            <CountryCriteria onSearch={_searchAction}/>
            <CountryActionBar />
            <CountryDetail />
            <CountryList />
        </div>
    );
}
