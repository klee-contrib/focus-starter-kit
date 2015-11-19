import React, {Component} from 'react';
import dispatcher from 'focus-core/dispatcher';
import {component as Modal} from 'focus-components/application/popin';

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
    _onDetailPopinClose = () => {
        //Remove the detailId and call the list load action.
        this.setState({detailId: null}, () => {
            //Instead of doing so we can create the action in this component and provide it to the list instead of the store and the service.
            this.refs.list.refs.smartList._action.load();
        });
    };

    render() {
        const {detailId} = this.state || {};
        return (
            <div>
                <CountryCriteria onSearch={_dispatchSearchCriteria}/>
            <CountryActionBar />
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
                handleLineClick={(d) => this.setState({detailId: d.id})}
                ref='list'
                searchSvc={loadCountryListByCriteria}
                store={_countryListStore}
            />
            </div>
        );
    }
}

CountryAdminPage.displayName = CountryAdminPage;

export default CountryAdminPage;
