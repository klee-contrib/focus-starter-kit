import InputDate from 'focus-components/components/input/textarea';

export default {
    type: 'text',
    InputComponent: InputDate,
    validator: [{
        type: 'string',
        options: {
            maxLength: 5000
        }
    }]
};
