//librairies
import React, {PropTypes} from 'react';
import FocusComponents from 'focus-components';

// web components
import Panel from 'focus-components/components/panel';
import {mixin as formMixin} from 'focus-components/common/form';

//stores & actions
import personStore from '../../../stores/person';
import {biographyActions} from '../../../action/person';

export default React.createClass({
    displayName: 'PersonBiography',
    propTypes: {
        id: PropTypes.number
    },
    mixins: [formMixin],
    definitionPath: 'person',
    stores: [{store: personStore, properties: ['person']}],
    action: biographyActions,

    /** @inheritDoc */
    renderContent() {
        return (
            <Panel actions={this._renderActions} title='person.detail.biography'>
                {this.fieldFor('biography')}
                {this.fieldFor('shortBiography')}
            </Panel>
        );
    }
});
