//libraries
import React, {PropTypes} from 'react';
import i18n from 'i18next-client';

//web components
import MaterialCard from '../material-card';
import PersonIdentity from './person-identity';
import PersonActions from './person-actions';

export default React.createClass({
    displayName: 'PersonCard',
    propTypes: {
        code: PropTypes.number,
        leadActor: PropTypes.bool,
        linked: PropTypes.bool,
        name: PropTypes.string,
        photoURL: PropTypes.string,
        role: PropTypes.string
    },
    _getIdentityComponent() {
        const {leadActor, name, role} = this.props;
        return <PersonIdentity leadActor={leadActor} name={name} role={role} />;
    },
    _getActionsComponent() {
        const {code, linked} = this.props;
        return <PersonActions code={code} linked={linked} />;
    },
    render() {
        const {photoURL} = this.props;
        const identityComponent = this._getIdentityComponent();
        const actionsComponent = this._getActionsComponent();
        return (
            <MaterialCard pictureUrl={photoURL} core={identityComponent} actions={actionsComponent} />
        );
    }
});
