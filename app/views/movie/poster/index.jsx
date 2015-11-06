//imports
import React, {PropTypes} from 'react';

export default React.createClass({
    displayName: 'Poster',
    propTypes: {
        poster: PropTypes.string,
        title: PropTypes.string
    },

    /** @inheritDoc */
    render() {
        const {poster, title} = this.props;
        return (
            <div data-demo='poster'>
                <i className="material-icons">local_movies</i>
                {poster &&
                    <img alt={title} src={poster} title={title} />
                }
            </div>
        );
    }
});
