//imports
import React from 'react';
import FocusComponents from 'focus-components';

//stores
import movieStore from '../../../stores/movie';

//focus-components
const {Panel} = FocusComponents.components;
const {mixin: formMixin} = FocusComponents.common.form;

export default React.createClass({
    displayName: 'MovieCaracteristics',
    mixins: [formMixin],
    definitionPath: 'movie',
    stores: [{store: movieStore, properties: ['movie']}],

    /** @inheritDoc */
    renderContent() {
        return (
            <Panel title='movie.detail.caracteristics'>
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
