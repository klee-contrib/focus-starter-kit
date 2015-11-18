//libraries
import React, {PropTypes} from 'react';

export default React.createClass({
    displayName: 'PersonCard',
    propTypes: {
        code: PropTypes.string,
        leadActor: PropTypes.bool,
        name: PropTypes.string,
        photoURL: PropTypes.string,
        role: PropTypes.string
    },

    /** @inheritDoc */
    render() {
        const {code, leadActor, name, photoURL, role} = this.props;
        return (
            <div data-demo='person-card'>
                <div className="photo">
                    {photoURL &&
                        <img src={photoURL} />
                    }
                </div>
                <div className="identity-role">
                    <div className="name">{name}</div>
                    <div className="role">{role}</div>
                </div>
            </div>
        );
    }
});
