//librairies
import React from 'react';
import {translate} from 'focus-core/translation';
import {mixin as LinePreset} from 'focus-components/list/selection/line'

const CountryLine = React.createClass({
    displayName: 'CountryLine',
    mixins: [LinePreset],
    definitionPath: 'country',
    renderLineContent() {
        return (
          <div data-demo='country-line-content'>
            <div className='img'><img src={this.props.data.img} /></div>
            {this.textFor('id')}
            {this.textFor('code')}
            {this.textFor('name')}
          </div>
        );
    }
})

export default CountryLine;
