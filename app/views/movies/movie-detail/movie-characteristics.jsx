// Libs
import React, { PropTypes } from 'react';
import { mixin as formMixin } from 'focus-components/mixin/form';

// Actions & Stores
import { movieActions } from '../../../actions/movies';
import { movieStore } from '../../../stores/movies';

// Components
import { Panel } from 'focus-components/components';

export const MovieCharacteristics = React.createClass({
    mixins: [formMixin], // Ajout du form mixin
    definitionPath: 'movie', // Définition de notre entité
    stores: [{ store: movieStore, properties: ['movie'] }], // Abonnement au store
    action: movieActions.movieCharacteristics, // Donne les actions au form
    renderContent() {
        return (
            <Panel actions={this._renderActions} title='view.movie.detail.characteristics'>
                {/* Les fieldFor sont des fonctions helper pour afficher et éditer un champ avec label} */}
                {this.fieldFor('title')}
                {this.fieldFor('originalTitle')}
                {this.fieldFor('keywords')}
                {this.fieldFor('runtime')}
                {this.fieldFor('movieType')}
                {this.fieldFor('productionYear')}
            </Panel>
        );
    }
});
MovieCharacteristics.propTypes = {
    id: PropTypes.number.isRequired
};
