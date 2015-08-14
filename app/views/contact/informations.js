let contactStore = require('../../stores/contact');
let actions = require('../../actions/contact').informations;
let Block = Focus.components.common.block.component;

let InformationComponent = React.createClass({
    displayName: 'ContactInformations',
    definitionPath: 'contactInformations',
    action: actions,
    mixins: [FocusComponents.common.form.mixin],
    stores: [{store: contactStore, properties: ['informations']}],
    renderContent(){
        return (
            <Block title='contact.informations.title' actions={this._renderActions}>
                {this.fieldFor('firstName')}
                {this.fieldFor('lastName')}
                {this.fieldFor('bio')}
                {this.fieldFor('job')}
            </Block>
        );
    }
});
module.exports = InformationComponent;
