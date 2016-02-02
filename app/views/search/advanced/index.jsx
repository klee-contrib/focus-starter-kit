import React, {PropTypes} from 'react';

// web components
import {component as AdvancedSearch} from 'focus-components/page/search/advanced-search';

//line mapping
import {configuration} from './configuration';

function AdvancedSearchView() {
    console.log(configuration);
    return <AdvancedSearch {...configuration} />;
};

AdvancedSearchView.displayName = 'AdvancedSearch';
export default AdvancedSearchView;
