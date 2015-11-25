import React from 'react';
import Backbone from 'backbone';

// web components
import {cartridgeBehaviour} from 'focus-components/page/mixin';
import HeaderSearchBar from '../../components/search/header-search-bar';

export default React.createClass({
    displayName: 'HomeView',
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
        //const props = { hasLoad: false, hasForm: false }; //{id: this.props.id};
        return {
            cartridge: { component: HeaderSearchBar },
            actions: {
                primary: [],
                secondary: []
            }
        };
    },

    /** @inheritDoc */
    render() {
        return (
            <div>
                <h1>Bienvenue sur la démo FOCUS</h1>
                <p><a onClick={() => Backbone.history.navigate('movies/10053', true)}>Movie 10053</a></p>
                <p><a onClick={() => Backbone.history.navigate('persons/10', true)}>Person 10</a></p>
            </div>
        );
    }
});
