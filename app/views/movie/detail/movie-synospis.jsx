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
    mixins: [formMixin],
    definitionPath: 'movie',
    stores: [{store: movieStore, properties: ['movie']}],

    /** @inheritDoc */
    renderContent() {
        return (
            <Panel title='movie.detail.synopsis'>
                {this.fieldFor('synopsis')}
                {this.fieldFor('shortSynopsis')}
            </Panel>
        );
    }
});
