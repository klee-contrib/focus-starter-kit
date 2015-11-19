//libraries
import React, {PropTypes} from 'react';

//web components
import PersonCard from './person-card';

export default React.createClass({
    displayName: 'PersonCardList',
    propTypes: {
        persons: PropTypes.array
    },

    /** @inheritDoc */
    render() {
        const {persons} = this.props;
        return (
            <div data-demo='person-card-list'>
                {persons &&
                    persons.map(person => {
                        const {code, leadActor, name, photoURL, role} = person;
                        const key = `person-card-${code}`;
                        return (
                            <PersonCard key={key} code={code} leadActor={leadActor} name={name} photoURL={photoURL} role={role} />
                        );
                    })
                }
            </div>
        );
    }
});
