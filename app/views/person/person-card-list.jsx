//libraries
import React, {PropTypes} from 'react';

//web components
import PersonCard from './person-card';

export default React.createClass({
    displayName: 'PersonCardList',
    propTypes: {
        personList: PropTypes.array
    },

    /** @inheritDoc */
    render() {
        const {personList} = this.props;
        return (
            <div data-demo='person-card-list'>
                <div data-demo="person-card-list">
                    {personList &&
                        personList.map(person => {
                            const {code, leadActor, name, photoURL, role} = person;
                            const key = `person-card-${code}`;
                            return (
                                <PersonCard key={key} code={code} leadActor={leadActor} name={name} photoURL={photoURL} role={role} />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
});
