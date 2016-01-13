//libraries
import React, {PropTypes} from 'react';
import i18n from 'i18next-client';

//web components
import {component as Button} from 'focus-components/common/button/action';

export default React.createClass({
    displayName: 'MovieCard',
    propTypes: {
        code: PropTypes.number,
        movieType: PropTypes.string,
        poster: PropTypes.string,
        productionYear: PropTypes.number,
        title: PropTypes.string
    },


    render() {
        const {code, onClickPreview, movieType, poster, productionYear, title, linked} = this.props;
        return (
            <div className='mdl-card mdl-shadow--4dp' data-demo='material-card'>
                <div className='visuel'>
                    <div>
                        {poster && <img src={poster} title='Picture' alt='Picture' />}
                    </div>
                    {!poster &&
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
                    <Button shape={null} label='movie.action.preview' handleOnClick={() => onClickPreview(+code)} />
                    <Button shape={null} label='movie.action.consult.sheet' handleOnClick={() => Backbone.history.navigate(`movies/${code}`, true)} />
                </div>
            </div>
        );
    }
});
