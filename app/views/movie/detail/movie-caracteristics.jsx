import React from 'react';
import FocusComponents from 'focus-components';

const {Panel} = FocusComponents.components;

export default React.createClass({
    displayName: 'MovieCaracteristics',

    /** @inheritDoc */
    render() {
        return (
            <Panel title='movie.detail.caracteristics'>
                Ici les caracteristiques.
            </Panel>
        );
    }
});
