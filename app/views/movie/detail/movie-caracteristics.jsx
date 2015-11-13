import React, {PropTypes} from 'react';
import FocusComponents from 'focus-components';

//stores
import movieStore from '../../../stores/movie';

//actions
import movieActions from '../../../action/movie';

//focus-components
const {Panel} = FocusComponents.components;
const {mixin: formMixin} = FocusComponents.common.form;

export default React.createClass({
    displayName: 'MovieCaracteristics',
    propTypes: {
        id: PropTypes.number
    },
    mixins: [formMixin],
    definitionPath: 'movie',
    stores: [{store: movieStore, properties: ['movie']}],
    action: {
        load: movieActions.movie.load,
        save: movieActions.movie.saveCaracteristics
    },

    /** @inheritDoc */
    renderContent() {
        return (
            <Panel actions={this._renderActions} title='movie.detail.caracteristics'>
                {this.fieldFor('title')}
                {this.fieldFor('originalTitle')}
                {this.fieldFor('keywords')}
                {this.fieldFor('runtime')}
                {this.fieldFor('movieType')}
                {this.fieldFor('productionYear')}
                {this.fieldFor('trailerName')}
                {this.fieldFor('trailerHRef')}
            </Panel>
        );
    }
});
