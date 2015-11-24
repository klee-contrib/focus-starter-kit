//libraries
import React, {PropTypes} from 'react';
import i18n from 'i18next-client';

function PersonCard({leadActor, name, role}) {
    return (
        <div className='card-info' data-demo="person-identity">
            <div className='card-info--level1'>{name}</div>
            <div className='card-info--level2'>{role}</div>
        </div>
    );
}

PersonCard.displayName = 'PersonCard';
PersonCard.propTypes = {
    leadActor: PropTypes.bool,
    name: PropTypes.string,
    role: PropTypes.string
};

export default PersonCard;
