/* views/movie/detail/index.jsx */
import React from 'react';

/// MIXINS
import { mixin as formPreset } from 'focus-components/common/form';
import { cartridgeBehaviour } from 'focus-components/page/mixin';

///ACTIONS/STORES
import movieActions from '../../../action/movie';
import movieStore from '../../../stores/movie';

/// COMPONENTS
import MovieHeaderCollapsed from './movie-header-collapsed';
import MovieHeaderExpanded from './movie-header-expanded';

const MovieDetail = React.createClass({
    displayName: 'MovieDetail',
    mixins: [formPreset],
    definitionPath: 'movie',
    stores: [{ store: movieStore, properties: ['movie'] }],
    action: {
        load: movieActions.getMovie,
        save: movieActions.updateMovie
    },
    cartridgeConfiguration() {
        const props = { hasLoad: false, hasForm: false }; // props qui seront données aux composants du header
        return {
            cartridge: { component: MovieHeaderExpanded, props },
            summary: { component: MovieHeaderCollapsed, props },
            actions: {
                primary: [{ // action d'exemple
                    label: 'Imprimer',
                    icon: 'print',
                    action: () => { alert('todo print') }
                }],
                secondary: []
            }
        };
    },
    renderContent() {
        return (
            <div>
                {this.fieldFor('title')}
                {this.fieldFor('originalTitle')}
                {this.fieldFor('keywords')}
                {this.fieldFor('runtime')}
                {this.fieldFor('movieType')}
                {this.fieldFor('productionYear')}
                {this._renderActions()}
            </div>);
    }
});

export default MovieDetail;