import React, {PropTypes} from 'react';
import FocusComponents from 'focus-components';

//Project views
import HeaderExpanded from './movie-header-content-expanded';
import HeaderSummary from './movie-header-content-summary';
import MovieActors from './movie-actors';
import MoviesCaracteristics from './movie-caracteristics';
import MoviePosters from './movie-posters';
import MovieSynopsis from './movie-synospis';

//Focus components
const {ScrollspyContainer} = FocusComponents.components;
const BackButton = FocusComponents.common.button.back.component;
const {cartridgeBehaviour} = FocusComponents.page.mixin;
const {storeBehaviour} = FocusComponents.common.mixin;

//Stores
import movieStore from '../../../stores/movie';

//Services
import movieAction from '../.././../action/movie';

export default React.createClass({
    displayName: 'MovieDetailView',
    propTypes: {
        id: PropTypes.number
    },
    mixins: [storeBehaviour, cartridgeBehaviour],

    /** @inheritDoc */
    componentWillMount() {
        // const {id} = this.props;
        //
        // //action load
        // movieAction.movie.load(id);

        //this._registerListeners();
        this._registerCartridge();
    },

    definitionPath: 'movie',
    stores: [{store: movieStore, properties: ['movie']}],

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
                <MovieSynopsis id={id} />
                <MoviesCaracteristics id={id} />
                <MoviePosters id={id} />
                <MovieActors id={id} />
            </ScrollspyContainer>
        );
    }
});
