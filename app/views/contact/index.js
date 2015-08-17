//Chargement des dépendances.
let {types} = Focus.component;
let Informations = require('./informations');
let Address = require('./address');
let Friends = require('./friends-block');

//Page composite.
let ContactDetail = React.createClass({
    mixins: [FocusComponents.page.detail.mixin],
    propTypes:{
        id: types('string')
    },
    render(){
        let {id} = this.props;
        return (
            <div className='page-deatil-contact'>
                <Informations id={id} />
                <Address id={id} />
                <Friends id={id} />
            </div>
      );
    }
});

module.exports = ContactDetail;
