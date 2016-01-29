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
import {moviesLinksActions} from '../../../action/person';

export default React.createClass({
    displayName: 'PersonMovie',
    propTypes: {
        id: PropTypes.number.isRequired
    },
    mixins: [storeBehaviour],

    /** @inheritDoc */
    getInitialState() {
        return {
            personMovieLinks: personStore.getPersonMovieLinks() || [],
            movieCodePreview: null
        }
    },

    /** @inheritDoc */
    componentWillMount() {
        const {id} = this.props;
        moviesLinksActions.load(id);
    },
    stores: [{store: personStore, properties: ['personMovieLinks']}],

    /** @inheritDoc */
    render() {
        const {personMovieLinks, movieCodePreview} = this.state;
        return (
            <Panel title='person.detail.movies'>
                <MovieCardList movies={personMovieLinks} onClickPreview={(movieId) => this.setState({movieCodePreview: movieId})}/>
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
