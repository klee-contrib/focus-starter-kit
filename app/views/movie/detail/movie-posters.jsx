//librairies
import React, {PropTypes} from 'react';
import FocusComponents from 'focus-components';

// web components
import Panel from 'focus-components/components/panel';

export default React.createClass({
    displayName: 'MoviePosters',
    propTypes: {
        id: PropTypes.number.isRequired
    },

    /** @inheritDoc */
    render() {
        return (
            <Panel title='movie.detail.posters'>
                Ici les posters.
            </Panel>
        );
    }
});
