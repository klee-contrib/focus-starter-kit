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
    constructor(props){
      super(props);
      this.state = {
        isCriteria: true
      };
    }
    _onDetailPopinClose = () => {
        //Remove the detailId and call the list load action.
        this.setState({detailId: null}, () => loadCountryList());
    };

    render() {
        const {detailId, isCriteria} = this.state;
        return (
            <div>
                <h2>{'Administration de la liste des pays'}</h2>

                {
                  /*Criteria */
                  isCriteria ?
                    /*This is a simple search field where the user can type something to filter the list*/
                    <CountryCriteria onSearch={_dispatchSearchCriteria}/>
                    :
                    /* This is an example of an action bar which consists in filtering the list with a letter criteria*/
                    <CountryActionBar onLetterClick={(letter) => {_dispatchSearchCriteria(letter)}}/>

                }

                {/*LIST : This is the list which trigger the search and is connected to the list store */}
                <CountryList
                    action={loadCountryList}
                    columns={[{label: 'name'}, {label: 'drigo'}]}
                    handleLineClick={d => this.setState({detailId: d.id}, ()=> console.log(this.constructor.displayName, this.state))}
                    store={countryListStore}
                />

                {
                    /*
                      When it is in the state, the popin is automatically displayed
                      The detail popin is handled by this id
                    */
                    detailId &&
                    <Modal
                        onPopinClose={this._onDetailPopinClose}
                        open={true}
                        type='from-right'
                    >
                        <CountryDetail id={detailId}/>
                    </Modal>
                }
            </div>
        );
    }
}

CountryAdminPage.displayName = 'CountryAdminPage';

export default CountryAdminPage;
