//imports
import React from 'react';
import FocusComponents from 'focus-components';

//stores
import movieStore from '../../../stores/movie';

//focus-components
const {Panel} = FocusComponents.components;
const {mixin: formMixin} = FocusComponents.common.form;


export default React.createClass({
    displayName: 'MovieSynopsis',
    definitionPath: 'movie',
    mixins: [formMixin],
    stores: [{store: movieStore, properties: ['movie']}],
    hasLoad: false,

    /** @inheritDoc */
    renderContent() {
        return (
            <Panel title='movie.detail.synopsis'>
                {this.fieldFor('synopsis')}
            </Panel>
        );
    }
});
