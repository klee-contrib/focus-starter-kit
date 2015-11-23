//libraries
import React, {PropTypes} from 'react';

function Trailer({url}) {
    return (
        <div data-demo='trailer'>
            {url &&
                <iframe src={url} allowfullscreen={true} seamless={true} width="1024" height="768" />
            }
        </div>
    );
}

Trailer.displayName = 'Trailer';
Trailer.propTypes = {
    url: PropTypes.string
};
export default Trailer;
