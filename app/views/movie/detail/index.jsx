import React, { PropTypes } from 'react';
import MovieDetail from './movie-detail';
import MovieDates from './movie-dates';
import ScrollspyContainer from 'focus-components/components/scrollspy-container';
import { Panel } from 'focus-components/components';

import { cartridgeBehaviour } from 'focus-components/page/mixin';

import MovieHeaderCollapsed from './movie-header-collapsed';
import MovieHeaderExpanded from './movie-header-expanded';

import movieActions from '../../../action/movie';

export default React.createClass({
    displayName: 'movie-detail-page',
    mixins: [cartridgeBehaviour],
    propTypes: {
        id: PropTypes.number.isRequired
    },

    action: {
        load: movieActions.getMovie
    },

    componentDidMount() {
        this.action.load(this.props.id);
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
    render() {
        return (
            <ScrollspyContainer>
                <Panel title='view.movie.detail.characteristics'>
                    <MovieDetail id={this.props.id} hasLoad={false} />
                </Panel>
                <Panel title='view.movie.detail.dates'>
                    <MovieDates hasLoad={false} />
                </Panel>
            </ScrollspyContainer>);
    }
});