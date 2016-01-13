//librairies
import React, {PropTypes} from 'react';

// web components
import {component as Modal} from 'focus-components/application/popin';
import Panel from 'focus-components/components/panel';
import {storeBehaviour} from 'focus-components/common/mixin';
import MovieCardList from '../../movie/components/movie-card-list';
import MoviePreview from '../../movie/preview';

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
            movieLinks: personStore.getMovies() || [],
            movieCodePreview: null
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
        const {movieLinks, movieCodePreview} = this.state;
        return (
            <Panel title='person.detail.movies'>
                <MovieCardList movies={movieLinks} onClickPreview={(movieId) => this.setState({movieCodePreview: movieId})}/>
                {movieCodePreview &&
                    <Modal open={true} onPopinClose={this._onCreateMoviePopinClose} type='from-right'>
                        <MoviePreview id={movieCodePreview}/>
                    </Modal>
                }
            </Panel>
        );
    },
    _onCreateMoviePopinClose() {
        this.setState({movieCodePreview: null});
    }
});
