//librairies
import React, {PropTypes} from 'react';
import {translate} from 'focus-core/translation';

// web components
import {component as Modal} from 'focus-components/application/popin';
import Panel from 'focus-components/components/panel';
import {storeBehaviour} from 'focus-components/common/mixin';
import PersonCardList from '../../person/components/person-card-list';
import {component as Button} from 'focus-components/common/button/action';
import PersonPreview from '../../person/preview';

//stores & actions
import movieStore from '../../../stores/movie';
import {castingActions} from '../../../action/movie';


export default React.createClass({
    displayName: 'MovieCasting',
    propTypes: {
        id: PropTypes.number.isRequired
    },
    mixins: [storeBehaviour],
    stores: [{store: movieStore, properties: ['casting']}],

    getInitialState() {
        return {
            filter: 'actors',
            personCodePreview: null
        }
    },

    /** @inheritDoc */
    componentWillMount() {
        const {id} = this.props;
        castingActions.loadPeople(id);
    },

    _getPeople() {
        const {filter} = this.state;
        return this._getPeopleByName(filter);
    },

    _getPeopleByName(filter) {
        const {actors, camera, directors, producers, writers} = this.state;
        switch (filter) {
            case 'actors':
            return actors;
            case 'camera':
            return camera;
            case 'directors':
            return directors;
            case 'producers':
            return producers;
            case 'writers':
            return writers;
            default:
            return [];
        }
    },

    _setPeople(value) {
        this.setState({
            filter: value
        });
    },

    _getActionLabel(filter) {
        const people = this._getPeopleByName(filter);
        const size = people ? people.length : 0;
        return`${translate(`movie.action.filter.${filter}`)} (${size})`;
    },

    _isActive(value) {
        const {filter} = this.state;
        return filter === value;
    },

    /** @inheritDoc */
    render() {
        const {personCodePreview, filter} = this.state;
        const people = this._getPeople();
        const list = people ? people : [];
        return (
            <Panel title='movie.detail.casting'>
                <div className='filters-bar'>
                    {['actors','camera','directors','producers','writers'].map(peopleType =>
                        <Button key={`btn-filter-${peopleType}`} shape={null} label={this._getActionLabel(peopleType)} handleOnClick={() => this._setPeople(peopleType)} data-active={this._isActive(peopleType)} />
                    )}
                </div>
                <PersonCardList persons={list} onClickPreview={(personId) => this.setState({personCodePreview: personId})} />
                {personCodePreview &&
                    <Modal open={true} onPopinClose={this._onCreatePersonPopinClose} type='from-right'>
                        <PersonPreview id={personCodePreview} />
                    </Modal>
                }
            </Panel>
        );
    },

    _onCreatePersonPopinClose() {
        this.setState({personCodePreview: null});
    }
});
