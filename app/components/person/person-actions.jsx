//libraries
import React, {PropTypes} from 'react';

// web components
import {component as Button} from 'focus-components/common/button/action';

function PersonActions({code, linked}) {
    return (
        <div>
            {linked &&
                <Button shape='primary' label='person.action.preview' />
            }
            {linked &&
                <Button shape='primary' label='person.action.consult' handleOnClick={() => Backbone.history.navigate(`persons/${code}`, true)} />
            }
            {!linked &&
                <Button shape='primary' label='person.action.create' />
            }
        </div>
    );
}

PersonActions.displayName = 'PersonActions';
PersonActions.propTypes = {
    code: PropTypes.number,
    linked: PropTypes.bool
};

export default PersonActions;
