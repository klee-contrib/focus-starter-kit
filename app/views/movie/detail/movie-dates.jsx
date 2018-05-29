/* views/movie/detail/index.jsx */
import React from 'react';

/// MIXINS
import { mixin as formPreset } from 'focus-components/common/form';

///ACTIONS/STORES
import movieStore from '../../../stores/movie';

const MovieDetail = React.createClass({
    displayName: 'MovieDetail',
    mixins: [formPreset],
    definitionPath: 'movie',
    stores: [{ store: movieStore, properties: ['movie'] }],

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