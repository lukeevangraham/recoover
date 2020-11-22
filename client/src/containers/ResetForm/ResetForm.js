import React from "react";
import { Field, reduxForm } from "redux-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker-cssmodules.css";

const ResetForm = (props) => {

  const ReduxFormDate = (props) => (
    <DatePicker
      selected={props.input.value || null}
      onChange={props.input.onChange}
    />
  );

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="enteredLastResetDate">Enter reset date:</label>
        <Field name="resetDate" component={ReduxFormDate} />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "reset" })(ResetForm);
