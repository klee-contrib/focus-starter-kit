//libraries
import React, {PropTypes} from 'react';

function Trailer({url}) {
    return (
        <div data-demo='trailer'>
            {url &&
                <iframe src={url} allowFullScreen={true} seamless={true} />
            }
        </div>
    );
}

Trailer.displayName = 'Trailer';
Trailer.propTypes = {
    url: PropTypes.string
};
export default Trailer;
