//libraries
import React, {PropTypes} from 'react';

//web components
import {component as Button} from 'focus-components/common/button/action';

function PersonCard({code, leadActor, linked, name, photoURL, role}) {
    return (
        <div className='mdl-card mdl-shadow--4dp' data-demo='material-card'>
            <div className='picture'>
                <div>
                    {photoURL && <img src={photoURL} title='Picture' alt='Picture' />}
                </div>
                {!linked &&
                    <p><span>{i18n.t('person.unknown')}</span></p>
                }
                {linked && !photoURL &&
                    <span className="mdl-card__menu">
                        <Button shape='icon' label='person.action.add-photo' icon='add_a_photo' />
                    </span>
                }
            </div>
            <div className='mdl-card__supporting-text'>
                <div className='card-info' data-demo="person-identity">
                    <div className='card-info--level1'>{name}</div>
                    <div className='card-info--level2'>{role}</div>
                </div>
            </div>
            <div className='mdl-card__actions mdl-card--border'>
                {linked &&
                    <Button shape={null} label='person.action.preview' />
                }
                {linked &&
                    <Button shape={null} label='person.action.consult' handleOnClick={() => Backbone.history.navigate(`persons/${code}`, true)} />
                }
                {!linked &&
                    <Button shape={null} label='person.action.create' />
                }
            </div>
        </div>
    );
}

PersonCard.displayName = 'PersonCard';
PersonCard.propTypes = {
    code: PropTypes.number,
    leadActor: PropTypes.bool,
    linked: PropTypes.bool,
    name: PropTypes.string,
    photoURL: PropTypes.string,
    role: PropTypes.string
};
export default PersonCard;
