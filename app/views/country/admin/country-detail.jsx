//librairies
import React from 'react';
import {translate} from 'focus-core/translation';
import Panel from 'focus-components/components/panel';
import {mixin as formPreset} from 'focus-components/common/form';

//stores & actions
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
          <div>
            <h3>{translate('country.detail.title')}</h3>
            <Panel title={translate('country.detail.infos')} actions={this._renderActions}>
                {this.displayFor('id')}
                {this.fieldFor('code')}
                {this.fieldFor('name')}
                {this.fieldFor('maps')}
            </Panel>
          </div>
        );
    }
})
