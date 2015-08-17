let contactStore = require('../../stores/contact');
let actions = require('../../actions/contact').friends;

let Block = Focus.components.common.block.component;
let Button = Focus.components.common.button.action.component;
let FriendLine = require('./friend-line');
let FriendsFullList = require('./friends-full-list');
let Popin = Focus.components.application.popin.component;

let i18nMixin = Focus.components.common.i18n.mixin;

let FriendsComponent = React.createClass({
    displayName: 'Friends',
    definitionPath: 'contactFriends',
    mixins: [FocusComponents.common.form.mixin, i18nMixin],
    action: actions,
    stores: [{store: contactStore, properties: ['friends', 'informations']}],
    _showAllFriends(e) {
        e.preventDefault();
        this.refs.popin.toggleOpen();
    },
    renderContent(){
        let {friends = [], firstName = ''} = this.state;
        return (
            <Block title='contact.friends.title'>
                {this.listFor('friends', {lineComponent: FriendLine, hasMoreData: false})}
                <Button handleOnClick={this._showAllFriends} label={this.i18n('button.showFriends')} />
                <Popin ref='popin' type='from-right'>
                    <FriendsFullList data={friends} firstName={firstName}/>
                </Popin>
            </Block>
        );
    }
});

module.exports = FriendsComponent;
