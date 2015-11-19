import React, {PropTypes} from 'react';
function CountryCriteria({onSearch}) {
    return (
        <div>
            <input
                onChange={e => onSearch(e.target.value)}
                type='search'
            />
        </div>
    );
}

CountryCriteria.propTypes = {
    onSearch: PropTypes.func.isRequired
}

export default CountryCriteria;
