//librairies
import React, {PropTypes} from 'react';
import FocusComponents from 'focus-components';

// web components
import Panel from 'focus-components/components/panel';
import {storeBehaviour} from 'focus-components/common/mixin';
import MovieCardList from '../../../components/movie/movie-card-list';

//stores & actions
import personStore from '../../../stores/person';
import {moviesActions} from '../../../action/person';

export default React.createClass({
    displayName: 'PersonMovie',
    propTypes: {
        id: PropTypes.number.isRequired
    },
    mixins: [storeBehaviour],

    /** @inheritDoc */
    getInitialState() {
        return {
            movies: personStore.getMovies() || []
        }
    },

    /** @inheritDoc */
    componentWillMount() {
        const {id} = this.props;
        moviesActions.load(id);
    },
    stores: [{store: personStore, properties: ['movies']}],

    /** @inheritDoc */
    render() {
        const {movies} = this.state;
        return (
            <Panel title='person.detail.movies'>
                <MovieCardList movies={movies} />
            </Panel>
        );
    }
});
