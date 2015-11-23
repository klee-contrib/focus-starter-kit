//libraries
import React, {PropTypes} from 'react';
import i18n from 'i18next-client';

//web components
import {component as Button} from 'focus-components/common/button/action';

function PersonCard({code, leadActor, name, photoURL, role, linked}) {
    return (
        <div data-demo='concept-card'>
            <div className="visuel">
                {photoURL &&
                    <img src={photoURL} />
                }
            </div>
            <div className='hover-actions'>
                <div className='hover-actions--buttons'>
                    {linked &&
                        <div>
                            <Button icon='info' shape='fab' label='person.card.consult.info' />
                            <span>{i18n.t('person.card.consult.info')}</span>
                        </div>
                    }
                    {linked &&
                        <div>
                            <Button icon='person' shape='fab' label='person.card.consult.profil' handleOnClick={() => Backbone.history.navigate(`persons/${code}`, true)} />
                            <span>{i18n.t('person.card.consult.profil')}</span>
                        </div>
                    }
                    {!linked &&
                        <div>
                            <p>{i18n.t('person.card.consult.noProfil')}</p>
                            <Button icon='add_circle' shape='fab' label='person.card.add.info' />
                        </div>
                    }
                </div>
            </div>
            <div className='card-info'>
                <div className='card-info--level1'>{name}</div>
                <div className='card-info--level2'>{role}</div>
            </div>
        </div>
    );
}

PersonCard.displayName = 'PersonCard';
PersonCard.propTypes = {
    code: PropTypes.number,
    leadActor: PropTypes.bool,
    name: PropTypes.string,
    photoURL: PropTypes.string,
    role: PropTypes.string
};

export default PersonCard;
