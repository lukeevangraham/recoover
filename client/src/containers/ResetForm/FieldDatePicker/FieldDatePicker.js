import React from 'react'
import DatePicker from "react-datepicker";

export const FieldDatePicker = ({ input, placeholder, minDate, maxDate }) => (
    <DatePicker
        selected={input.value || null}
        onChange={input.onChange}
        minDate={minDate}
        maxDate={maxDate}
        disabledKeyboardNavigation
        placeholderText={placeholder}
    />
);