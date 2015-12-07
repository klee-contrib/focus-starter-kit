//libraries
import React, {PropTypes} from 'react';

//web components
import PersonCard from './person-card';

function PersonCardList({onClickCreate, persons}) {
    return (
        <div data-demo='concept-card-list'>
            {persons &&
                persons.map(({code, leadActor, name, photoURL, role, linked}) => {
                    const key = `person-card-${code}`;
                    return (
                        <PersonCard key={key} code={code} leadActor={leadActor} linked={linked} name={name} onClickCreate={onClickCreate} photoURL={photoURL} role={role} />
                    );
                })
            }
        </div>
    );
}

PersonCardList.displayName = 'PersonCardList';
PersonCardList.propTypes = {
    onClickCreate: PropTypes.func,
    persons: PropTypes.array
};
export default PersonCardList;
