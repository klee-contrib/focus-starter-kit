// libraries
import React from 'react';
import FocusComponents from 'focus-components';
import i18n from 'i18next-client';

//web components
import {mixin as formMixin} from 'focus-components/common/form';

//stores
import personStore from '../../../stores/person';

//custom components
import Picture from '../picture';

export default React.createClass({
    displayName: 'PersonDetailHeaderExpanded',
    mixins: [formMixin],
    definitionPath: 'person',
    stores: [{store: personStore, properties: ['person']}],

    /** @inheritDoc */
    renderContent() {
        const {fullName, photoURL, shortBiography} = this.state;
        return (
            <div data-demo='header-content-expanded'>
                <Picture url={photoURL} title={fullName} />
                <div data-demo='header-content-expanded__infos'>
                    <h2>{i18n.t('person.keyConcept.name')}</h2>
                    <h3>{this.textFor('fullName')}</h3>
                    <h5>Age</h5>
                    <p>{this.textFor('shortBiography')}</p>
                </div>
            </div>
        );
    }
})
