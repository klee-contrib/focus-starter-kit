//librairies
import React, {PropTypes} from 'react';
import i18n from 'i18next-client';

// web components
import Panel from 'focus-components/components/panel';
import {storeBehaviour} from 'focus-components/common/mixin';
import PersonCardList from '../../../components/person/person-card-list';
import {component as Button} from 'focus-components/common/button/action';

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

    /** @inheritDoc */
    getInitialState() {
        return {
            filter: 'actors'
        }
    },

    /** @inheritDoc */
    componentWillMount(){
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
        return`${i18n.t(`movie.action.filter.${filter}`)} (${size})`;
    },

    _isActive(value) {
        const {filter} = this.state;
        return filter === value;
    },

    /** @inheritDoc */
    render() {
        const {actors, camera, directors, producers, writers, filter} = this.state;
        const people = this._getPeople();
        const list = people ? people : [];
        return (
            <Panel title='movie.detail.casting'>
                <div className='filters-bar'>
                    <Button shape={null} label={this._getActionLabel('actors')} handleOnClick={() => this._setPeople('actors')} data-active={this._isActive('actors')} />
                    <Button shape={null} label={this._getActionLabel('cameramen')} handleOnClick={() => this._setPeople('cameramen')} data-active={this._isActive('cameramen')} />
                    <Button shape={null} label={this._getActionLabel('directors')} handleOnClick={() => this._setPeople('directors')} data-active={this._isActive('directors')} />
                    <Button shape={null} label={this._getActionLabel('producers')} handleOnClick={() => this._setPeople('producers')} data-active={this._isActive('producers')} />
                    <Button shape={null} label={this._getActionLabel('writers')} handleOnClick={() => this._setPeople('writers')} data-active={this._isActive('writers')} />
                </div>
                <PersonCardList persons={list} />
            </Panel>
        );
    }
});
