//librairies
import React, {PropTypes} from 'react';
import FocusComponents from 'focus-components';

// web components
import Panel from 'focus-components/components/panel';
import {mixin as formPreset} from 'focus-components/common/form';

//stores & actions
import movieStore from '../../../stores/movie';
import {trailerActions} from '../../../action/movie';

//custom components
import Poster from '../poster';

export default React.createClass({
    displayName: 'MovieTrailer',
    propTypes: {
        id: PropTypes.number
    },
    mixins: [formPreset],
    definitionPath: 'movie',
    stores: [{store: movieStore, properties: ['movie']}],
    action: trailerActions,

    /** @inheritDoc */
    renderContent() {
        const {trailerHRef} = this.state;
        return (
            <Panel title='movie.detail.trailer'>
                {this.fieldFor('trailerName')}
                {this.fieldFor('trailerHRef')}
                <br/>
                {trailerHRef &&
                    <iframe src={trailerHRef} allowfullscreen={true} seamless={true} width="1024" height="768" />
                }
            </Panel>
        );
    }
});
