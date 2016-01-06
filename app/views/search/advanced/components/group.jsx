// libraires
import React from 'react';
import i18n from 'i18next-client';

//web components
import {component as Button} from 'focus-components/common/button/action';

export default React.createClass({
    displayName: 'AdvancedSearchGroup',
    _getShowAllHandler(key) {
        return () => {
            this.props.showAllHandler(key);
        };
    },
    render() {
        return (
            <div className="listResultContainer panel" data-focus="group-result-container">
                <h3>{`${this.props.groupKey} (${this.props.count})`}</h3>
                <p>{i18n.t('search.mostRelevant')}</p>
                <div className="resultContainer">
                    {this.props.children}
                </div>
                <div data-focus='group-actions'>
                    {this.props.canShowMore &&
                      <Button handleOnClick={this.props.showMoreHandler} label={i18n.t('show.more')}/>
                    }
                    <Button handleOnClick={this._getShowAllHandler(this.props.groupKey)} label={i18n.t('show.all')}/>
                </div>
            </div>
        );
    }
});
