module.exports = {
    type: 'text',
    decorator: 'datePicker',
    style: 'date right',
    format: {
        value: function getValue(data) {
            return data;
        }
    }
};
