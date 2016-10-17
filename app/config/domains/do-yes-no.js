import {component as SelectRadio} from 'focus-components/select-radio';

export default {
    SelectComponent: SelectRadio,
    refContainer: {yesNoList: [{code: true, label: 'select.oui'}, {code: false, label: 'select.non'}]},
    listName: 'yesNoList',
    formatter: d => 'true'
};
