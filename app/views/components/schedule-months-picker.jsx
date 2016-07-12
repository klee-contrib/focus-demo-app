//dependencies
import React, {Component, PropTypes} from 'react';
import chunck from 'lodash/array/chunk';
import indexOf from 'lodash/array/indexOf';

import {translate} from 'focus-core/translation';
import Button from 'focus-components/components/button';

const months = [
    { id: 1,  label: 'planning.months.january.short' },
    { id: 2,  label: 'planning.months.february.short' },
    { id: 3,  label: 'planning.months.march.short' },
    { id: 4,  label: 'planning.months.april.short' },
    { id: 5,  label: 'planning.months.may.short' },
    { id: 6,  label: 'planning.months.june.short' },
    { id: 7,  label: 'planning.months.july.short' },
    { id: 8,  label: 'planning.months.august.short' },
    { id: 8,  label: 'planning.months.september.short' },
    { id: 10, label: 'planning.months.october.short' },
    { id: 11, label: 'planning.months.november.short' },
    { id: 12, label: 'planning.months.december.short' }
];

const propTypes = {
    onClickMonth: PropTypes.func.isRequired,
    selectedMonths: PropTypes.array.isRequired
};

const defaultProps = {
    selectedMonths: [3,7]
};


/**
* Component ScheduleMonthsPicker.
* @param  {[func]}         onClickDay   callback for onclick event
* @param  {[array]}        selectedDays list of selected days
* @return {[Component]}    the component
 */
const ScheduleMonthsPicker = ({onClickDay, selectedMonths}) => (
    <div data-cavimac="schedule-months-picker">
        {
            months.map((month) => {
                const isSelected = indexOf(selectedMonths, month.id) >= 0;
                return <button key={month.id} onClick={(evt) => onClickDay(evt.target.value)} type='button' value={month.id} data-selected={isSelected}>{translate(month.label)}</button>
            })
        }
    </div>
);

//Static props.
ScheduleMonthsPicker.displayName = 'ScheduleMonthsPicker';
ScheduleMonthsPicker.defaultProps = defaultProps;
ScheduleMonthsPicker.propTypes = propTypes;

export default ScheduleMonthsPicker;
