import React, {PropTypes} from 'react';
import {debounce} from 'lodash/function';
import {translate} from 'focus-core/translation';
import InputText from 'focus-components/components/input/text';
function CountryCriteria({onSearch}) {
    const _onSearchDebounced = debounce(value => onSearch(value), 200);
    return (
            <InputText
                onChange={value => _onSearchDebounced(value)}
                placeholder={translate('countryList.filter')}
                type='search'
            />
    );
}

CountryCriteria.propTypes = {
    onSearch: PropTypes.func.isRequired
}

export default CountryCriteria;
