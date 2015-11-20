import React, {PropTypes} from 'react';
import {debounce} from 'lodash/function'
function CountryCriteria({onSearch}) {
    const _onSearchDebounced = debounce(value => onSearch(value), 200);
    return (
        <div>
            <input
                onChange={({target: {value}}) => _onSearchDebounced(value)}
                type='search'
            />
        </div>
    );
}

CountryCriteria.propTypes = {
    onSearch: PropTypes.func.isRequired
}

export default CountryCriteria;
