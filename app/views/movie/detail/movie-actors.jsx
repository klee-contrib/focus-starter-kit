import React from 'react';
import FocusComponents from 'focus-components';

const {Panel} = FocusComponents.components;

export default React.createClass({
    displayName: 'MovieActors',
    /** @inheritDoc */
    render() {
        return (
            <Panel title='movie.detail.actors'>
                Ici les acteurs.
            </Panel>
        );
    }
});
