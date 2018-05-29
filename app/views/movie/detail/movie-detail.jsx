/* views/movie/detail/index.jsx */
import React from 'react';

/// MIXINS
import { mixin as formPreset } from 'focus-components/common/form';

///ACTIONS/STORES
import movieActions from '../../../action/movie';
import movieStore from '../../../stores/movie';

const MovieDetail = React.createClass({
    displayName: 'MovieDetail',
    mixins: [formPreset],
    definitionPath: 'movie',
    stores: [{ store: movieStore, properties: ['movie'] }],
    action: {
        load: movieActions.getMovie,
        save: movieActions.updateMovie
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