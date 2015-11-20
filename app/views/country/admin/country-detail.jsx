//librairies
import React from 'react';
import i18n from 'i18next-client';
import Panel from 'focus-components/components/panel';
import {mixin as formPreset} from 'focus-components/common/form';


//web components

//stores
import countryStore from '../../../stores/country';
import {countryActions} from '../../../action/country'

export default React.createClass({
    displayName: 'Country',
    mixins: [formPreset],
    definitionPath: 'country',
    stores: [{store: countryStore, properties: ['informations']}],
    action: countryActions,
    /** @inheritDoc */
    renderContent() {
        const {name, maps, code} = this.state;
        return (
            <Panel actions={this._renderActions}>
                {i18n.t('keyConcept.country')}
                {this.fieldFor('name')}
                {this.fieldFor('maps')}
            </Panel>
        );
    }
})
