import React, {Component} from 'react';
import MovieCard from './movie-card';
import TranslationBehaviour from 'focus-components/behaviours/translation';

@TranslationBehaviour
class MarkRanking extends Component {
    render() {
        const {markRanking} = this.props;
        return (
            <div data-role='ranking'>
                <h1>{this.i18n('movie.rankings.best.title')}</h1>
                <div data-role='cards'>
                    {markRanking.map(movie => <MovieCard key={movie.code} {...movie}/>)}
                </div>
            </div>
        );
    }
}

export default MarkRanking;
