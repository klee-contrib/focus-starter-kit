import moment from 'moment';

export default {
    type: 'number',
    validator: [{
        type: 'number'
    }],
    formatter: value => moment.duration({seconds: value}).humanize()
};
