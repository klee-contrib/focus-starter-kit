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
import {directorsActions} from '../../../action/movie';

export default React.createClass({
    displayName: 'MovieDirectors',
    propTypes: {
        id: PropTypes.number.isRequired
    },
    mixins: [storeBehaviour],

    /** @inheritDoc */
    getInitialState() {
        return {
            actors: movieStore.getDirectors() || []
        }
    },

    /** @inheritDoc */
    componentWillMount(){
        const {id} = this.props;
        directorsActions.load(id);
    },

    stores: [{store: movieStore, properties: ['directors']}],

    /** @inheritDoc */
    render() {
        const {directors} = this.state;
        return (
            <Panel title='movie.detail.directors'>
                <PersonCardList persons={directors} />
            </Panel>
        );
    }
});
