let contactStore = require('../../stores/contact');
let actions = require('../../actions/contact').address;
let Block = Focus.components.common.block.component;

let InformationComponent = React.createClass({
    displayName: 'ContactInformations',
    definitionPath: 'contactInformations',
    action: actions,
    mixins: [FocusComponents.common.form.mixin],
    stores: [{store: contactStore, properties: ['address']}],
    renderContent(){
        return (
            <Block title='contact.address.title' actions={this._renderActions}>
                {this.fieldFor('firstName')}
                {this.fieldFor('lastName')}
                {this.fieldFor('bio')}
                {this.fieldFor('job')}
            </Block>
        );
    }
});
module.exports = InformationComponent;
