//libraries
import React, {PropTypes} from 'react';

//web components
import {component as Button} from 'focus-components/common/button/action';

export default React.createClass({
    displayName: 'PersonCard',
    propTypes: {
        code: PropTypes.number,
        onClickCreate: PropTypes.func,
        leadActor: PropTypes.bool,
        linked: PropTypes.bool,
        name: PropTypes.string,
        photoURL: PropTypes.string,
        role: PropTypes.string
    },

    render() {
        const {code, onClickCreate, leadActor, linked, name, photoURL, role} = this.props;
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
                            <Button shape='icon' label='person.action.add-photo' icon='add_a_photo' handleOnClick={() => console.log('click on person card add photo')} />
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
                        <Button shape={null} label='person.action.preview' handleOnClick={() => console.log('click on person card preview')} />
                    }
                    {linked &&
                        <Button shape={null} label='person.action.consult.sheet' handleOnClick={() => Backbone.history.navigate(`persons/${code}`, true)} />
                    }
                    {!linked &&
                        <Button handleOnClick={() => onClickCreate(+code)} label='person.action.create' shape={null} />
                    }
                </div>
            </div>
        );
    }
});
