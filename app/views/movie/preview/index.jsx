//libraries
import React, {PropTypes} from 'react';
import i18n from 'i18next-client';

export default React.createClass({
    displayName: 'MoviePreview',
    propTypes: {
        id: PropTypes.number.isRequired
    },

    /** @inheritDoc */
    render() {
        return (
            <div>
                'MoviePreview' {this.props.id}
            </div>
        ) ;
    }

});