import React, {Component} from 'react';

import {component as Modal} from 'focus-components/application/popin';

import CountryList from './country-list';
import CountryDetail from './country-detail';
import CountryCriteria from './country-criteria';
import CountryActionBar from './country-action-bar';
import {loadCountryList, updateCountyListProperties} from '../../../action/country';
import countryListStore from '../../../stores/country-list';

function _dispatchSearchCriteria(query) {
    updateCountyListProperties({criteria: query});
}

class CountryAdminPage extends Component {
    _onDetailPopinClose = () => {
        //Remove the detailId and call the list load action.
        this.setState({detailId: null}, () => loadCountryList());
    };

    render() {
        const {detailId} = this.state || {};
        return (
            <div>
                <h1>{'Administration de la liste des pays'}</h1>
                <CountryCriteria onSearch={_dispatchSearchCriteria}/>
                <CountryActionBar onLetterClick={(letter) => {_dispatchSearchCriteria(letter)}}/>
                {
                    detailId &&
                    <Modal
                        onPopinClose={this._onDetailPopinClose}
                        open={true}
                        type='from-right'
                    >
                        <CountryDetail id={detailId}/>
                    </Modal>
                }
                <CountryList
                    action={loadCountryList}
                    columns={[{label: 'name'}, {label: 'drigo'}]}
                    handleLineClick={(d) => this.setState({detailId: d.id})}
                    store={countryListStore}
                />
            </div>
        );
    }
}

CountryAdminPage.displayName = CountryAdminPage;

export default CountryAdminPage;
