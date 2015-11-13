import React, {PropTypes} from 'react';
import FocusComponents from 'focus-components';

const {Panel} = FocusComponents.components;

export default React.createClass({
    displayName: 'MoviePosters',
    propTypes: {
        id: PropTypes.number
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
