//libraries
import React, {PropTypes} from 'react';

//web components
import PersonCard from './person-card';

function PersonCardList({persons}) {
    return (
        <div data-demo='concept-card-list'>
            {persons &&
                persons.map(person => {
                    const {code, leadActor, name, photoURL, role, linked} = person;
                    const key = `person-card-${code}`;
                    return (
                        <PersonCard key={key} code={code} leadActor={leadActor} linked={linked} name={name} photoURL={photoURL} role={role} />
                    );
                })
            }
        </div>
    );
}

PersonCardList.displayName = 'PersonCardList';
PersonCardList.propTypes = {
    persons: PropTypes.array
};
export default PersonCardList;
