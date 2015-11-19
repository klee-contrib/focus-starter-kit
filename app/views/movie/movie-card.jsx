//libraries
import React, {PropTypes} from 'react';

export default React.createClass({
    displayName: 'MovieCard',
    propTypes: {
        code: PropTypes.string,
        movieType: PropTypes.string,
        poster: PropTypes.string,
        productionYear: PropTypes.number,
        title: PropTypes.string
    },

    /** @inheritDoc */
    render() {
        const {code, movieType, poster, productionYear, title} = this.props;
        return (
            <div data-demo='movie-card'>
                <div className="movie-poster">
                    {poster &&
                        <img src={poster} />
                    }
                </div>
                <div className="movie-info">
                    <div className="title">{title}</div>
                    <div className="movie-type">{movieType}</div>
                    <div className="production-year">{productionYear}</div>
                </div>
            </div>
        );
    }
});
