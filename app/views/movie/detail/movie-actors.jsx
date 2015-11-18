//librairies
import React, {PropTypes} from 'react';
import FocusComponents from 'focus-components';

// web components
import Panel from 'focus-components/components/panel';
import {storeBehaviour} from 'focus-components/common/mixin';

//stores & actions
import movieStore from '../../../stores/movie';
import {actorsActions} from '../../../action/movie';

export default React.createClass({
    displayName: 'MovieActors',
    propTypes: {
        id: PropTypes.number
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
    /**
    * Render actors lines
    * @return {ReactComponent} list of movie actors
    */
    _renderActors() {
        const {actors} = this.state;
        console.log(actors);
        return actors.map((actor) => {
            return (
                <div>toto</div>
            );
        });
    },

    /** @inheritDoc */
    render() {
        return (
            <Panel title='movie.detail.actors'>
                {this._renderActors()}
            </Panel>
        );
    }
});
