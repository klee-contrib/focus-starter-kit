//librairies
import React from 'react';
import FocusComponents from 'focus-components';
import i18n from 'i18next-client';

//web components
import {mixin as formPreset} from 'focus-components/common/form';

//stores
import personStore from '../../../stores/person';

//custom components
import Picture from '../../../components/picture';

export default React.createClass({
    displayName: 'PersonDetailHeaderSummary',
    mixins: [formPreset],
    definitionPath: 'person',
    stores: [{store: personStore, properties: ['person']}],

    /** @inheritDoc */
    renderContent() {
        const {fullName, photoURL} = this.state;
        return (
            <div data-demo='header-content-summary'>
                <h4>{i18n.t('person.keyConcept.name')}</h4>
                <Picture url={photoURL} title={fullName} />
                <h5>{this.textFor('fullName')}</h5>
            </div>
        );
    }
})
