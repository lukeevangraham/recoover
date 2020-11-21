import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker-cssmodules.css";

const ResetForm = (props) => {
  console.log(props)

  // const [resetDate, setResetDate] = useState(new Date())
  const [startDate, setStartDate] = useState(new Date());

  const FieldDatePicker = ({ input, placeholder = "hi", minDate, maxDate }) => {
    console.log(input);

    return (
      <DatePicker
        selected={startDate}
        onChange={(time) => setStartDate(time)}
      />
    );
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="enteredLastResetDate">Enter reset date:</label>
        <Field name="resetDate" component={FieldDatePicker} />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "reset" })(ResetForm);
