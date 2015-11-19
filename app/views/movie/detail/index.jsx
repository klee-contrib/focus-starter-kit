// libraries
import React, {PropTypes} from 'react';
import FocusComponents from 'focus-components';

// web components
import ScrollspyContainer from 'focus-components/components/scrollspy-container';
import {component as BackButton} from 'focus-components/common/button/back';
import {cartridgeBehaviour} from 'focus-components/page/mixin';

//views
import HeaderExpanded from './movie-header-content-expanded';
import HeaderSummary from './movie-header-content-summary';
import MovieActors from './movie-actors';
import MovieCameramen from './movie-cameramen';
import MovieDirectors from './movie-directors';
import MoviesCaracteristics from './movie-caracteristics';
import MoviePosters from './movie-posters';
import MovieProducers from './movie-producers';
import MovieSynopsis from './movie-synospis';
import MovieTrailer from './movie-trailer';
import MovieWriters from './movie-writers';


export default React.createClass({
    displayName: 'MovieDetailView',
    propTypes: {
        id: PropTypes.number
    },
    mixins: [cartridgeBehaviour],

    /** @inheritDoc */
    componentWillMount() {
        this._registerCartridge();
    },

    /**
    * Related to the CartridgeBehaviour.
    * Define the cartridge configuration.
    * @return {[type]} [description]
    */
    cartridgeConfiguration() {
        const props = { hasLoad: false }; //{id: this.props.id};
        return {
            barLeft: { component: BackButton },
            cartridge: { component: HeaderExpanded, props },
            summary: { component: HeaderSummary, props },
            actions: {
                primary: this._getGlobalPrimaryActions() || [],
                secondary: []
            }
        };
    },

    _getGlobalPrimaryActions() {
        const {id} = this.props;
        const url = `http://www.allocine.fr/film/fichefilm_gen_cfilm=${id}.html`;

        // build primary actions tab
        //const {trailerHRef} = this.state;
        const actions = [];
        // if(trailerHRef) {
        //     this.actions.push({label: 'Jouer la bande annonce', icon: 'play_arrow', action: () => { console.log(trailerHRef); }});
        // }
        actions.push({label: 'Allociné', icon: 'launch', action: () => { window.open(url,'_blank'); }});
        return actions;
    },

    /** @inheritDoc */
    render() {
        const {id} = this.props;
        return (
            <ScrollspyContainer gridContentSize={10} gridMenuSize={2}>
                <MoviesCaracteristics id={id} />
                <MovieSynopsis id={id} />
                <MovieTrailer id={id} />
                <MoviePosters id={id} />
                <MovieActors id={id} />
                <MovieCameramen id={id} />
                <MovieDirectors id={id} />
                <MovieProducers id={id} />
                <MovieWriters id={id} />
            </ScrollspyContainer>
        );
    }
});
