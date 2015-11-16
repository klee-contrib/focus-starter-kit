//librairies
import React, {PropTypes} from 'react';
import FocusComponents from 'focus-components';

// web components
import Panel from 'focus-components/components/panel';

export default React.createClass({
    displayName: 'MovieActors',
    propTypes: {
        id: PropTypes.number
    },

    /** @inheritDoc */
    render() {
        return (
            <Panel title='movie.detail.actors'>
                Ici les acteurs.
            </Panel>
        );
    }
});
