//librairies
import React, {PropTypes} from 'react';
import FocusComponents from 'focus-components';

// web components
import Panel from 'focus-components/components/panel';
import {mixin as formPreset} from 'focus-components/common/form';

//stores & actions
import personStore from '../../../stores/person';
import {identityActions} from '../../../action/person';

export default React.createClass({
    displayName: 'PersonIdendity',
    propTypes: {
        id: PropTypes.number.isRequired
    },
    mixins: [formPreset],
    definitionPath: 'person',
    stores: [{store: personStore, properties: ['person']}],
    action: identityActions,

    /** @inheritDoc */
    renderContent() {
        return (
            <Panel actions={this._renderActions} title='person.detail.identity'>
                {this.fieldFor('fullName')}
                {this.fieldFor('firstName')}
                {this.fieldFor('sex')}
                {this.fieldFor('birthDate')}
                {this.fieldFor('birthPlace')}
                {this.fieldFor('activity')}
            </Panel>
        );
    }
});
