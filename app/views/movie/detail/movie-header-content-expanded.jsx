//imports
import React from 'react';
import FocusComponents from 'focus-components';
import i18n from 'i18next-client';

//stores
import movieStore from '../../../stores/movie';

//focus-components
const {mixin: formMixin} = FocusComponents.common.form;

export default React.createClass({
    displayName: 'MovieDetailHeaderExpanded',
    mixins: [formMixin],
    definitionPath: 'movie',
    stores: [{store: movieStore, properties: ['movie']}],

    /** @inheritDoc */
    renderContent() {
        return (
            <div data-demo='header-content-expanded'>
                <h2>{i18n.t('movie.keyConcept.name')}</h2>
                <h3>{this.textFor('title')}</h3>
                <h4>
                    <span>{this.textFor('movieType')}</span>
                    <span>&nbsp;-&nbsp;</span>
                    <span>{this.textFor('productionYear')}</span>
                </h4>
            </div>
        );
    }
})
