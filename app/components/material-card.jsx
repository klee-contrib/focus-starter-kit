//libraries
import React, {PropTypes} from 'react';
import i18n from 'i18next-client';

function MaterialCard({pictureUrl, core, actions}) {
    return (
        <div className='mdl-card mdl-shadow--2dp' data-demo='material-card'>
            <div data-demo='material-card-picture'>
                <div className='picture'>
                    {pictureUrl && <img src={pictureUrl} title='Picture' alt='Picture' />}
                </div>
            </div>
            {core &&
                <div className='mdl-card__supporting-text' data-demo='material-card-core'>
                    {core}
                </div>
            }
            <div data-demo='material-card-actions' className='mdl-card__actions mdl-card--border'>
                {actions}
            </div>
        </div>
    );
}

MaterialCard.displayName = 'MaterialCard';
MaterialCard.PropTypes = {
    imgUrl: PropTypes.string,
    core: PropTypes.element,
    actions: PropTypes.element
}
export default MaterialCard;
