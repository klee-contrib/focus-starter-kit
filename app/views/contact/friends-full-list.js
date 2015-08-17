let List = Focus.components.list.selection.list.component;
let FriendLine = require('./friend-line');
let i18nMixin = Focus.components.common.i18n.mixin;

let FriendsFullList = React.createClass({
    mixins: [i18nMixin],
    getDefaultProps() {
        return ({
            data: [],
            firstName: 'Unknown'
        });
    },
    render() {
        let {data, firstName} = this.props;
        return (
            <div>
                <h1>{this.i18n('contact.friends.all', {firstName})}</h1>
                <List
                    lineComponent={FriendLine}
                    data={data}
                    isSelection={false}
                />
            </div>
        );
    }
});

module.exports = FriendsFullList;
