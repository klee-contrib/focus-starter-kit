// libraries
import React, {PropTypes} from 'react';
import FocusComponents from 'focus-components';

// web components
import ScrollspyContainer from 'focus-components/components/scrollspy-container';
import {component as BackButton} from 'focus-components/common/button/back';
import {cartridgeBehaviour} from 'focus-components/page/mixin';

//views
import HeaderExpanded from './person-header-content-expanded';
import HeaderSummary from './person-header-content-summary';
import PersonBiography from './person-biography';
import PersonIdentity from './person-identity';
import PersonMovies from './person-movies';

export default React.createClass({
    displayName: 'PersonDetailView',
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
                primary: [],
                secondary: []
            }
        };
    },

    /** @inheritDoc */
    render() {
        const {id} = this.props;
        return (
            <ScrollspyContainer gridContentSize={10} gridMenuSize={2}>
                <PersonIdentity id={id} />
                <PersonBiography id={id} />
                <PersonMovies id={id} />
            </ScrollspyContainer>
        );
    }
});
