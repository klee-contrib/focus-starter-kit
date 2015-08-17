let contactStore = require('../../stores/contact');
let actions = require('../../actions/contact').address;
let Block = Focus.components.common.block.component;

let InformationComponent = React.createClass({
    displayName: 'ContactAddress',
    definitionPath: 'contactAddress',
    action: actions,
    mixins: [FocusComponents.common.form.mixin],
    stores: [{store: contactStore, properties: ['address']}],
    renderContent(){
        return (
            <Block actions={this._renderActions} title='contact.address.title'>
                {this.fieldFor('line1')}
                {this.fieldFor('zipCode')}
                {this.fieldFor('country')}
                {this.fieldFor('job')}
            </Block>
        );
    }
});
module.exports = InformationComponent;
