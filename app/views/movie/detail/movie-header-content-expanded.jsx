// libraries
import React from 'react';
import FocusComponents from 'focus-components';
import i18n from 'i18next-client';

//web components
import {mixin as formMixin} from 'focus-components/common/form';

//stores
import movieStore from '../../../stores/movie';

//custom components
import Poster from '../poster';

export default React.createClass({
    displayName: 'MovieDetailHeaderExpanded',
    mixins: [formMixin],
    definitionPath: 'movie',
    stores: [{store: movieStore, properties: ['movie']}],

    /** @inheritDoc */
    renderContent() {
        const {title, movieType, poster, productionYear} = this.state;
        return (
            <div data-demo='header-content-expanded'>
                <Poster poster={poster} title={title} />
                <div data-demo='header-content-expanded__infos'>
                    <h2>{i18n.t('movie.keyConcept.name')}</h2>
                    <h3>{title}</h3>
                    <h5>{movieType}</h5>
                    <h6>{productionYear}</h6>
                </div>
            </div>
        );
    }
})
