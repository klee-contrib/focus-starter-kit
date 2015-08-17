let contactStore = require('../../stores/contact');
let actions = require('../../actions/contact').address;
let Block = Focus.components.common.block.component;
let Map = require('../../components/map');
let InformationComponent = React.createClass({
    displayName: 'ContactAddress',
    definitionPath: 'contactAddress',
    action: actions,
    mixins: [FocusComponents.common.form.mixin],
    stores: [{store: contactStore, properties: ['address']}],
    renderContent(){
        let {latitude, longitude} = this.state;
        return (
            <Block actions={this._renderActions} title='contact.address.title'>
                {this.fieldFor('line1')}
                {this.fieldFor('zipCode')}
                {this.fieldFor('country')}
                {this.fieldFor('phone')}
                {this.fieldFor('latitude')}
                {this.fieldFor('longitude')}
                {latitude && longitude && <Map latitude={latitude} longitude={longitude}/>}
            </Block>
        );
    }
});
module.exports = InformationComponent;
