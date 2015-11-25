// libraries
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
    displayName: 'PersonDetailHeaderExpanded',
    mixins: [formPreset],
    definitionPath: 'person',
    stores: [{store: personStore, properties: ['person']}],

    /** @inheritDoc */
    renderContent() {
        const {fullName, photoURL} = this.state;
        return (
            <div data-demo='header-content-expanded'>
                <Picture url={photoURL} title={fullName} />
                <div data-demo='header-content-expanded__infos'>
                    <div className="key-concept">{i18n.t('person.keyConcept.name')}</div>
                    <h3>{this.textFor('fullName')}</h3>
                    <p>{this.textFor('shortBiography')}</p>
                </div>
            </div>
        );
    }
})
