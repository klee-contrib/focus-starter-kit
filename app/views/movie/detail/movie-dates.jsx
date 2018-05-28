/* views/movie/detail/index.jsx */
import React from 'react';
import { Panel } from 'focus-components/components'

/// MIXINS
import { mixin as formPreset } from 'focus-components/common/form';
import { cartridgeBehaviour } from 'focus-components/page/mixin';

///ACTIONS/STORES
import movieActions from '../../../action/movie';
import movieStore from '../../../stores/movie';

const MovieDetail = React.createClass({
    displayName: 'MovieDetail',
    mixins: [formPreset, cartridgeBehaviour],
    definitionPath: 'movie',
    stores: [{ store: movieStore, properties: ['movie'] }],
    action: {
        load: movieActions.getMovie,
        save: movieActions.updateMovie
    },

    renderContent() {
        return (
            <div>
                {this.fieldFor('createdAt')}
                {this.fieldFor('updatedAt')}
            </div>
        );
    }
});

export default MovieDetail;