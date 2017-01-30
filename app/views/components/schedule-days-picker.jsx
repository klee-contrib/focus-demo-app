//dependencies
import React, {Component, PropTypes} from 'react';
import chunck from 'lodash/array/chunk';
import indexOf from 'lodash/array/indexOf';
import uniqueId from 'lodash/utility/uniqueId';
import Button from 'focus-components/components/button';

const weekAndDays = chunck([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31], 7);

/** Props types */
const propTypes = {
    onClickDay: PropTypes.func.isRequired,
    selectedDays: PropTypes.array.isRequired
};

/** default values */
const defaultProps = {
    selectedDays: []
};


/**
 * Component ScheduleDaysPicker.
 * @param  {[func]}         onClickDay   callback for onclick event
 * @param  {[array]}        selectedDays list of selected days
 * @return {[Component]}    the component
 */
const ScheduleDaysPicker = ({onClickDay, selectedDays}) => (
    <div data-cavimac="schedule-days-picker">
        {
            weekAndDays.map((week) => {
                const index = uniqueId('week_');
                return <div key={index}>
                    {
                        week.map((day) => {
                            const isSelected = indexOf(selectedDays, day) >= 0;
                            return <button key={`day-${day}`} onClick={(evt) => onClickDay(evt.target.value)} type='button' value={day} data-selected={isSelected}>{day}</button>
                        })
                    }
                </div>
            })
        }
    </div>
);

//Static props.
ScheduleDaysPicker.displayName = 'ScheduleDaysPicker';
ScheduleDaysPicker.defaultProps = defaultProps;
ScheduleDaysPicker.propTypes = propTypes;

export default ScheduleDaysPicker;
