import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const ResetForm = (props) => {
  const { handleSubmit } = props;

  // const [resetDate, setResetDate] = useState(new Date())
  // const [startDate, setStartDate] = useState(new Date());

  const reduxDatePicker = (props) => {
    console.log(props);
    return (
      <DatePicker
        selected={props.input.value || null }
        onChange={props.input.onChange}
      />
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="enteredLastResetDate">Enter reset date:</label>
        <Field name="resetDate" component={reduxDatePicker} />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "reset" })(ResetForm);
