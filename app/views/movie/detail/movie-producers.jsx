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
import {producersActions} from '../../../action/movie';

export default React.createClass({
    displayName: 'MovieProducers',
    propTypes: {
        id: PropTypes.number.isRequired
    },
    mixins: [storeBehaviour],

    /** @inheritDoc */
    getInitialState() {
        return {
            actors: movieStore.getProducers() || []
        }
    },

    /** @inheritDoc */
    componentWillMount(){
        const {id} = this.props;
        producersActions.load(id);
    },

    stores: [{store: movieStore, properties: ['producers']}],

    /** @inheritDoc */
    render() {
        const {producers} = this.state;
        return (
            <Panel title='movie.detail.producers'>
                <PersonCardList persons={producers} />
            </Panel>
        );
    }
});
