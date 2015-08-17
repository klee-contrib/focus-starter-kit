let Friend = React.createClass({
    displayName: 'friend',
    definitionPath: 'contactFriends',
    mixins: [Focus.components.list.selection.line.mixin],
    style: {
        avatar: {
            float: 'left',
            marginRight: '20px'
        },
        line: {
            height: '150px'
        }
    },
    renderLineContent() {
        let {avatar, firstName, lastName} = this.props.data;
        return (
            <div style={this.style.line}>
                <img src={avatar} style={this.style.avatar}/>
                <div>
                    <p><b>{lastName}</b></p>
                    <p>{firstName}</p>
                </div>
            </div>
        );
    }
});

module.exports = Friend;
