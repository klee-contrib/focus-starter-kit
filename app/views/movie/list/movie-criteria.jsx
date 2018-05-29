//librairies
import React from 'react';
import { mixin as formPreset } from 'focus-components/common/form';

const MovieCriteria = React.createClass({
    displayName: 'movieCriteria', //Nom du composant pour le debug
    definitionPath: 'movie',
    mixins: [formPreset],

    updateMovieListProperties(title) {
        const self = this;
        this.setState({ title }, () => {
            self.props.updateMovieListProperties({
                criteria: {
                    title
                }
            });
        });
    },

    renderContent() { // rendu du contenu de la ligne.
        return (
            <div>
                {this.fieldFor('title', {
                    onChange: this.updateMovieListProperties
                })}
            </div>
        );
    }
});

export default MovieCriteria;