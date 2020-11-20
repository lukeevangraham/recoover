import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";

const ResetForm = (props) => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="enteredLastResetDate"
        component="input"
        type="date"
        />
      </div>
    </form>
  );
};

export default reduxForm(ResetForm);
