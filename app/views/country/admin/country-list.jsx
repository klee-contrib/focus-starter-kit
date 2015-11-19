import React, {PropTypes} from 'react';
import {component as SmartList} from 'focus-components/page/list'


function CountryList({handleLineClick, searchSvc, store}) {
    return (
        <div>
        <h2>Smart country list</h2>
        <SmartList
            LineComponent={({data, onLineClick}) => <tr onClick={() => onLineClick(data)}><td>{data.id}</td><td>{data.name}</td></tr>}
            onLineClick={handleLineClick}
            service={searchSvc}
            store={store}
        />
        </div>
    );
}


export default CountryList;
