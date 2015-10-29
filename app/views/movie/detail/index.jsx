import React from 'react';

//Focus components
const BackButton = FocusComponents.common.button.back.component;
const ScrollspyContainer = FocusComponents.components.ScrollspyContainer;
const cartridgeBehaviour = FocusComponents.page.mixin.cartridgeBehaviour;
const storeBehaviour = FocusComponents.common.mixin.storeBehaviour;

import HeaderExpanded from './movie-header-content-expanded';
import HeaderSummary from './movie-header-content-summary';
import MovieActors from './movie-actors';
import MoviesCaracteristics from './movie-caracteristics';
import MoviePosters from './movie-posters';
import MovieSynopsis from './movie-synospis';


export default React.createClass({
    displayName: 'MovieDetailView',
    mixins: [cartridgeBehaviour],

    /**
    * Related to the CartridgeBehaviour.
    * Define the cartridge configuration.
    * @return {[type]} [description]
    */
    cartridgeConfiguration() {
        const props = {}; //{id: this.props.id};
        return {
            barLeft: { component: BackButton },
            cartridge: { component: HeaderExpanded, props},
            summary: {component: HeaderSummary, props},
            actions: {
                primary: [],
                secondary: []
            }
        };
    },

    /** @inheritDoc */
    render() {
        return (
            <ScrollspyContainer gridContentSize={10} gridMenuSize={2}>
            <MovieSynopsis />
            <MoviesCaracteristics />
            <MoviePosters />
            <MovieActors />
            </ScrollspyContainer>
        );
    }
});
