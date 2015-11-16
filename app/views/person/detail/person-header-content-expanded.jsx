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
        //const {title, movieType, poster, productionYear} = this.state;
        return (
            <div data-demo='header-content-expanded'>
                <div data-demo='header-content-expanded__infos'>
                    <h2>{i18n.t('person.keyConcept.name')}</h2>
                </div>
            </div>
        );
    }
})
