import React from 'react';
import {component as Button} from 'focus-components/common/button/action';
import moment from 'moment';
import history from 'focus-core/history';
import {translate} from 'focus-core/translation';

const MovieCard = ({poster, originalTitle, productionYear, userRating, runtime, code}) => (
    <div data-role='movie-card' className='mdl-card mdl-shadow--4dp'>
        <div data-role='poster'>
            <i className='material-icons'>local_movies</i>
            <img src={poster}/>
            <div data-role='overlay'>
                <div data-role='background'></div>
                <div data-role='content'>
                    <div data-role='info'>
                        <i className='material-icons'>grade</i><div data-role='caption'>{`${userRating}%`}</div>
                    </div>
                    <div data-role='info'>
                        <i className='material-icons'>schedule</i><div data-role='caption'>{moment.utc(moment.duration(runtime, 'seconds').asMilliseconds()).format('h:mm')}</div>
                    </div>
                    <div data-role='detail-button'>
                        <Button label={translate('movie.rankings.viewDetails')} handleOnClick={() => history.navigate(`#movies/${code}`, true)}/>
                    </div>
                </div>
            </div>
        </div>
        <div className='mdl-card__supporting-text'>
            <div data-role='title'>{originalTitle}</div>
            <div data-role='year'>{productionYear}</div>
        </div>
    </div>
);

export default MovieCard;
