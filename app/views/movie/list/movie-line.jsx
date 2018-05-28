//librairies
import React from 'react';
// Nous allons chercher le preset de ligne
import { mixin as LinePreset } from 'focus-components/list/selection/line'

const MovieLine = React.createClass({
    displayName: 'MovieLine', //Nom du composant pour le debug
    mixins: [LinePreset], // Permet d'apporter un comportement à la ligne.
    definitionPath: 'movie', // Définition de notre entité
    renderLineContent(data) { // rendu du contenu de la ligne.
        return (
            <tr onClick={() => { this.props.onLineClick(data) }} >
                <td>{this.textFor('title')}</td>
                <td>{this.textFor('productionYear')}</td>
            </tr >
        );
    }
});

export default MovieLine;