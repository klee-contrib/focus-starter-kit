import React, {Component, PropTypes} from 'react';
import {component as SmartList} from 'focus-components/page/list'


class CountryList extends Component {
    render() {
        const {handleLineClick, searchSvc, store} = this.props;
        return (
            <div>
            <h2>Smart country list</h2>
            <SmartList
                LineComponent={({data, onLineClick}) => <tr onClick={() => onLineClick(data)}><td>{data.id}</td><td>{data.name}</td></tr>}
                onLineClick={handleLineClick}
                ref='smartList'
                service={searchSvc}
                store={store}
            />
            </div>
        );
    }
}

CountryList.displayName = 'CountryList';
CountryList.propTypes = {
    LineComponent: PropTypes.element,
    onLineClick: PropTypes.func.isRequired,
    service: PropTypes.func,
    store: PropTypes.func
}
export default CountryList;
