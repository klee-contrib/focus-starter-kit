import FocusComponents from 'focus-components';
import i18n from 'i18next-client';

module.exports = {
    SelectComponent: FocusComponents.common.select.radio.component,
    refContainer: {yesNoList: [{code: true, label: 'select.oui'}, {code: false, label: 'select.non'}]},
    listName: 'yesNoList',
    formatter: i18n.t
};
