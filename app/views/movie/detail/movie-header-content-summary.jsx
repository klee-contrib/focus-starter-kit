//imports
import React from 'react';
import FocusComponents from 'focus-components';
import i18n from 'i18next-client';

//stores
import movieStore from '../../../stores/movie';

//focus-components
const {mixin: formMixin} = FocusComponents.common.form;

//custom components
import Poster from '../poster';

export default React.createClass({
    displayName: 'MovieDetailHeaderSummary',
    mixins: [formMixin],
    definitionPath: 'movie',
    stores: [{store: movieStore, properties: ['movie']}],

    /** @inheritDoc */
    renderContent() {
        const {poster, title} = this.state;
        return (
            <div data-demo='header-content-summary'>
                <h4>{i18n.t('movie.keyConcept.name')}</h4>
                {poster &&
                    <Poster poster={poster} title={title} />
                }
                <h5>{this.textFor('title')}</h5>
                <h6>{this.textFor('productionYear')}</h6>
            </div>
        );
    }
})
