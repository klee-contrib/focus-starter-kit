//libraries
import React, {PropTypes} from 'react';

export default React.createClass({
    displayName: 'Picture',
    propTypes: {
        url: PropTypes.string,
        title: PropTypes.string
    },

    /** @inheritDoc */
    render() {
        const {title, url} = this.props;
        return (
            <div data-demo='picture'>
                <i className="material-icons">local_movies</i>
                {url &&
                    <img alt={title} src={url} title={title} />
                }
            </div>
        );
    }
});
