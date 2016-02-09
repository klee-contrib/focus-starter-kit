import React, {Component} from 'react';
import MovieCard from './movie-card';
import TranslationBehaviour from 'focus-components/behaviours/translation';

@TranslationBehaviour
class DateRanking extends Component {
    render() {
        const {dateRanking} = this.props;
        return (
            <div data-role='ranking'>
                <h1>{this.i18n('movie.rankings.latest.title')}</h1>
                <hr/>
                <div data-role='cards'>
                    {dateRanking.map(movie => <MovieCard key={movie.code} {...movie}/>)}
                </div>
            </div>
        );
    }
}

export default DateRanking;
