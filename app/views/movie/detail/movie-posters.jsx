import React from 'react';
import FocusComponents from 'focus-components';

const {Panel} = FocusComponents.components;

export default React.createClass({
    displayName: 'MoviePosters',

    /** @inheritDoc */
    render() {
        return (
            <Panel title='movie.detail.posters'>
                Ici les posters.
            </Panel>
        );
    }
});
