// libraires
import React, {PropTypes, Component} from 'react';
import Translation from 'focus-components/behaviours/translation';
import formatter from  'focus-core/definition/formatter/number';

//web components
import {component as Button} from 'focus-components/common/button/action';

const propTypes = {
    count: PropTypes.number.isRequired,
    groupKey: PropTypes.string.isRequired
};

const defaultProps = {
    count: 0
};

@Translation
class QuickSearchGroup extends Component {

    showAllHandler() {
        alert("TODO !!!");
        // const {groupKey} = this.props;
        //dispatch in advanced search store
        // dispatcher.handleViewAction({
        //     data: {
        //         '': null,
        //         groupingKey: null,
        //         results: [],
        //         facets: [],
        //         totalCount: 0
        //     },
        //     type: 'update',
        //     identifier: 'ADVANCED_SEARCH'
        // });
    }

    render() {
        const {children, count, groupKey, showAllHandler} = this.props
        return (
            <div data-focus="group-container">
                <div data-focus='group-container-title'>
                    <div>
                        <h3>
                            <span>{groupKey}</span>
                            <span>{formatter.format(count)}</span>
                        </h3>
                        <p>{this.i18n('search.mostRelevant')}</p>
                    </div>
                    <div data-focus='group-container-actions__right'>
                        <Button shape={null} color='accent' handleOnClick={this.showAllHandler} label={this.i18n('search.show.all')} />
                    </div>
                </div>
                <div data-focus="group-container-results">
                    {children}
                </div>
            </div>
        );
    }
}

QuickSearchGroup.propTypes = propTypes;
QuickSearchGroup.defaultProps = defaultProps;
QuickSearchGroup.displayName = 'QuickSearchGroup';

export default QuickSearchGroup;
