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
    displayName: 'MovieSynopsis',
    propTypes: {
        id: PropTypes.number
    },
    mixins: [formMixin],
    definitionPath: 'movie',
    stores: [{store: movieStore, properties: ['movie']}],
    action: {
        load: movieActions.movie.load,
        save: movieActions.movie.saveSynopsis
    },

    /** @inheritDoc */
    renderContent() {
        return (
            <Panel actions={this._renderActions} title='movie.detail.synopsis'>
                {this.fieldFor('synopsis')}
                {this.fieldFor('shortSynopsis')}
            </Panel>
        );
    }
});
