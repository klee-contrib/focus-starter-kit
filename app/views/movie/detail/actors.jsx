//librairies
import React, {PropTypes} from 'react';

// web components
import Panel from 'focus-components/components/panel';
import {storeBehaviour} from 'focus-components/common/mixin';
import PersonCardList from '../../../components/person/person-card-list';

//stores & actions
import movieStore from '../../../stores/movie';
import {actorsActions} from '../../../action/movie';


export default React.createClass({
    displayName: 'MovieActors',
    propTypes: {
        id: PropTypes.number.isRequired
    },
    mixins: [storeBehaviour],
    stores: [{store: movieStore, properties: ['actors']}],

    /** @inheritDoc */
    getInitialState() {
        return {
            actors: movieStore.getActors() || []
        }
    },

    /** @inheritDoc */
    componentWillMount(){
        const {id} = this.props;
        actorsActions.load(id);
    },

    /** @inheritDoc */
    render() {
        const {actors} = this.state;
        return (
            <Panel title='movie.detail.actors'>
                <PersonCardList persons={actors} />
            </Panel>
        );
    }
});
