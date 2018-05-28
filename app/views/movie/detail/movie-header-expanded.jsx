/* views/movie/detail/header-expanded.jsx */
import React from 'react';

import { mixin as formPreset } from 'focus-components/common/form';

import movieStore from '../../../stores/movie';


const MovieHeaderExpanded = React.createClass({
    displayName: 'MovieHeaderExpanded',
    mixins: [formPreset],
    definitionPath: 'movie',
    stores: [{ store: movieStore, properties: ['movie'] }],
    renderContent() {
        return (
            <div>
                <h3>{this.textFor('title')}</h3>
                <h5>{this.textFor('movieType')}</h5>
                <h6>{this.textFor('productionYear')}</h6>
                <div>{this.textFor('shortSynopsis')}</div>
            </div>
        );
    }
});

export default MovieHeaderExpanded;