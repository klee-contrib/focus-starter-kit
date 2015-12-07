//libraries
import React, {PropTypes} from 'react';

// web components
import {mixin as formPreset} from 'focus-components/common/form';

export default React.createClass({
    displayName: 'MovieCreationForm',
    propTypes: {
        id: PropTypes.number.isRequired
    },
    // mixins: [formPreset],
    // definitionPath: 'movie',
    // stores: [{store: movieStore, properties: ['movie']}],

    /** @inheritDoc */
    render() {
        return (
            <div>test</div>
        );
    }
});
