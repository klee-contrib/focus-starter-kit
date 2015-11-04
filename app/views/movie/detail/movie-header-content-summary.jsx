//imports
import React from 'react';
import FocusComponents from 'focus-components';

//stores
import movieStore from '../../../stores/movie';

//focus-components
const {mixin: formMixin} = FocusComponents.common.form;

export default React.createClass({
    displayName: 'MovieDetailHeaderSummary',
    mixins: [formMixin],
    definitionPath: 'movie',
    stores: [{store: movieStore, properties: ['movie']}],

    /** @inheritDoc */
    renderContent() {
        return (
            <div data-demo='header-content-summary'>
                <h4>Movie</h4>
                <h5>{this.textFor('title')}</h5>
                <h6>{this.textFor('productionYear')}</h6>
            </div>
        );
    }
})
