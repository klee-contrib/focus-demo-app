// import React, {PropTypes} from 'react';
// import {debounce} from 'lodash/function';
// import i18next from 'i18next';
// import InputExpandableText from '../../components/input/text-expandable';
//
// const propTypes = {
//     onSearch: PropTypes.func.isRequired
// };
//
// function CountryCriteria({onSearch}) {
//     const _onSearchDebounced = debounce(value => onSearch(value), 200);
//     return (
//         <div data-demo='country-criteria'>
//             <InputExpandableText
//                 onChange={value => _onSearchDebounced(value)}
//                 placeholder={i18next.t('countryList.filter')}
//                 type='search'
//                 name='search'
//                 expandIcon='search'
//             />
//         </div>
//     );
// };
//
// CountryCriteria.propTypes = propTypes;
// export default CountryCriteria;
