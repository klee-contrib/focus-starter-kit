//libraries
import React, {PropTypes} from 'react';
import i18n from 'i18next-client';

//web components
import {component as Button} from 'focus-components/common/button/action';

function MovieCard({code, movieType, poster, productionYear, title, linked}) {
    return (
        <div className='mdl-card mdl-shadow--4dp' data-demo='material-card'>
            <div className='picture'>
                <div>
                    {poster && <img src={poster} title='Picture' alt='Picture' />}
                </div>
                {!linked &&
                    <p><span>{i18n.t('movie.unknown')}</span></p>
                }
                {linked && !poster &&
                    <span className="mdl-card__menu">
                        <Button shape='icon' label='movie.action.add-photo' icon='add_a_photo' />
                    </span>
                }
            </div>
            <div className='mdl-card__supporting-text'>
                <div className='card-info'>
                    <div className='card-info--level1'>{title}</div>
                    <div className='card-info--level2'>{movieType}</div>
                    <div className='card-info--level3'>{productionYear}</div>
                </div>
            </div>
            <div className='mdl-card__actions mdl-card--border'>
                {linked &&
                    <Button shape={null} label='movie.action.preview' />
                }
                {linked &&
                    <Button shape={null} label='movie.action.consult.sheet' handleOnClick={() => Backbone.history.navigate(`movies/${code}`, true)} />
                }
                {!linked &&
                    <Button shape={null} label='movie.action.create' />
                }
            </div>
        </div>
    );
}

MovieCard.displayName = 'MovieCard';
MovieCard.propTypes = {
    code: PropTypes.number,
    movieType: PropTypes.string,
    poster: PropTypes.string,
    productionYear: PropTypes.number,
    title: PropTypes.string
};
export default MovieCard;
