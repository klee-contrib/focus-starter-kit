// libraires
import React from 'react';
import {translate} from 'focus-core/translation';

//web components
import {component as Button} from 'focus-components/common/button/action';

export default React.createClass({
    displayName: 'QuickSearchGroup',
    _getShowAllHandler(key) {
        return () => {
            this.props.showAllHandler(key);
        };
    },
    render() {
        return (
            <div className="listResultContainer panel" data-focus="group-result-container">
                <h3>{`${this.props.groupKey} (${this.props.count})`}</h3>
                <p>{translate('search.mostRelevant')}</p>
                <div className="resultContainer">
                    {this.props.children}
                </div>
            </div>
        );
    }
});
