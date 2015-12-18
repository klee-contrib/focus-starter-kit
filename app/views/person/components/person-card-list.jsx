//libraries
import React, {PropTypes} from 'react';

//web components
import PersonCard from './person-card';

function PersonCardList({onClickPreview, persons}) {
    return (
        <div data-demo='concept-card-list'>
            {persons &&
                persons.map(({code, leadActor, name, photoURL, role, linked}) => {
                    const key = `person-card-${code}`;
                    return (
                        <PersonCard key={key} code={code} leadActor={leadActor} linked={linked} name={name} onClickPreview={onClickPreview} photoURL={photoURL} role={role} />
                    );
                })
            }
        </div>
    );
}

PersonCardList.displayName = 'PersonCardList';
PersonCardList.propTypes = {
    onClickPreview: PropTypes.func,
    persons: PropTypes.array
};
export default PersonCardList;
