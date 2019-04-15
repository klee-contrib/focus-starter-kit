// Libs
import React, { PropTypes } from 'react';

// Actions
import { movieActions } from '../../../actions/movies';

// Components
import { MovieCharacteristics } from './movie-characteristics';

export class MovieDetailPage extends React.Component {
    static propTypes = {
        id: PropTypes.number.isRequired
    };

    componentDidMount() {
        // Chargement de l'entité depuis le serveur
        movieActions.movieCharacteristics.load(this.props.id);
    }

    render() {
        const { id } = this.props;
        return <MovieCharacteristics id={id} />;
    }
}
