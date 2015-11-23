//librairies
import React, {PropTypes} from 'react';
import FocusComponents from 'focus-components';

// web components
import Panel from 'focus-components/components/panel';
import {storeBehaviour} from 'focus-components/common/mixin';
import PersonCard from '../../person/person-card';
import PersonCardList from '../../person/person-card-list';

//stores & actions
import movieStore from '../../../stores/movie';
import {cameramenActions} from '../../../action/movie';


export default React.createClass({
    displayName: 'MovieCameramen',
    propTypes: {
        id: PropTypes.number.isRequired
    },
    mixins: [storeBehaviour],

    /** @inheritDoc */
    getInitialState() {
        return {
            actors: movieStore.getCameramen() || []
        }
    },

    /** @inheritDoc */
    componentWillMount(){
        const {id} = this.props;
        cameramenActions.load(id);
    },

    stores: [{store: movieStore, properties: ['cameramen']}],

    /** @inheritDoc */
    render() {
        const {cameramen} = this.state;
        return (
            <Panel title='movie.detail.cameramen'>
                <PersonCardList persons={cameramen} />
            </Panel>
        );
    }
});
