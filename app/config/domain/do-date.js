/* global moment, Focus */
module.exports = {
    type: 'text',
    style: 'date right',
    InputComponent: FocusComponents.common.input.date.component,
    formatter: function dateFormatter(date){
        return moment(date).format('L');
    },
    unformatter: function dateUnformatter(data){
        return moment(data).toDate();
    }
};
