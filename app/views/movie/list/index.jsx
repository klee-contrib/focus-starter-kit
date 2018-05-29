import React from 'react';

/// STORE
import movieListStore from '../../../stores/movie-list';
import { component as Modal } from 'focus-components/application/popin';

import movieActions from '../../../action/movie'

/// COMPONENTS
import { component as SmartList } from 'focus-components/page/list';
import { Panel } from 'focus-components/components';

import MovieCriteria from './movie-criteria';
import MovieLine from './movie-line';
import MovieDetail from '../detail/movie-detail';

export default React.createClass({
    displayName: 'movie-list-page',

    getInitialState() {
        return {};
    },

    _onDetailPopinClose() {
        this.setState({ detailId: null }, () => movieActions.searchMovies.load());
    },
    render() {
        const handleLineClick = (line) => {
            this.setState({ detailId: line.id });
        };
        const columns = {
            title: { label: 'movie.title' },
            productionYear: { label: 'movie.productionYear' }

        };
        return (<div style={{ 'list-style-type': 'none' }}>

            <Panel title='view.movie.search.criteria'>
                <MovieCriteria
                    isEdit
                    updateMovieListProperties={movieActions.searchMovies.updateProperties}
                />
            </Panel>
            <Panel title='view.movie.search.results'>
                <SmartList
                    action={{ load: movieActions.searchMovies.load }} // L'action qui charge la liste
                    columns={columns}
                    isSelection={false}
                    LineComponent={MovieLine} // La ligne à utliser dans la liste
                    onLineClick={handleLineClick} // Le handler de click sur la ligne
                    store={movieListStore} // Le store sur lequel le composant doit s'abonner.
                />
            </Panel>
            {this.state.detailId &&
                <Modal
                    open
                    onPopinClose={this._onDetailPopinClose}
                    type='from-right'
                >
                    <MovieDetail id={this.state.detailId} isEdit />
                </Modal>}
        </div>);
    }
});
