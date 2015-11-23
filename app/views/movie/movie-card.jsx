//libraries
import React, {PropTypes} from 'react';

//web components
import {component as Button} from 'focus-components/common/button/action';

function MovieCard({code, movieType, poster, productionYear, title, linked}) {
    return (
        <div data-demo='concept-card'>
            <div className="visuel">
            {poster &&
                <img src={poster} />
            }
            </div>
            <div className='hover-actions'>
                <div className='hover-actions--buttons'>
                    {linked &&
                        <div>
                            <Button icon='info' shape='fab' label='movie.card.consult.info' />
                            <span>{i18n.t('movie.card.consult.info')}</span>
                        </div>
                    }
                    {linked &&
                        <div>
                            <Button icon='person' shape='fab' label='movie.card.consult.profil' handleOnClick={() => Backbone.history.navigate(`persons/${code}`, true)} />
                            <span>{i18n.t('movie.card.consult.profil')}</span>
                        </div>
                    }
                </div>
            </div>
            <div className="card-info">
                <div className="card-info--level1">{title}</div>
                <div className="card-info--level2">{movieType}</div>
                <div className="card-info--level3">{productionYear}</div>
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
