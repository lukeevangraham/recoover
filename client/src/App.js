import React from "react";
import { connect } from "react-redux";
import { addPfdReset } from "./store/actions/"
import CheckIn from "./containers/CheckIn/CheckIn";
import ResetForm from "./containers/ResetForm/ResetForm";

const App = (props) => {
  const onSubmit = (formValues) => {
    props.addPfdReset(formValues)
  };

  return (
    <div>
      <CheckIn />
      <ResetForm handleSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { addPfdReset })(App);
