//librairies
import React from 'react';
import i18n from 'i18next-client';

//web components
import {mixin as formPreset} from 'focus-components/common/form';

//stores
import movieStore from '../../../stores/movie';

//custom components
import Poster from '../components/poster';

export default React.createClass({
    displayName: 'MovieDetailHeaderSummary',
    mixins: [formPreset],
    definitionPath: 'movie',
    stores: [{store: movieStore, properties: ['movie']}],

    /** @inheritDoc */
    renderContent() {
        const {poster, title} = this.state;
        return (
            <div data-demo='header-content-summary'>
                <div className="key-concept">{i18n.t('movie.keyConcept.name')}</div>
                {poster &&
                    <Poster poster={poster} title={title} />
                }
                <h4>{this.textFor('title')}</h4>
                <h5>{this.textFor('productionYear')}</h5>
            </div>
        );
    }
})
