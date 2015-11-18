//libraries
import React, {PropTypes} from 'react';

export default React.createClass({
    displayName: 'Trailer',
    propTypes: {
        url: PropTypes.string
    },

    /** @inheritDoc */
    render() {
        const {url} = this.props;
        return (
            <div data-demo='trailer'>
                {url &&
                    <iframe src={url} allowfullscreen={true} seamless={true} width="1024" height="768" />
                }
            </div>
        );
    }
});
