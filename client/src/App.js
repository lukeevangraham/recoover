import React from "react";
import { connect } from "react-redux";
import { addPfdReset } from "./store/actions/"
import CheckIn from "./containers/CheckIn/CheckIn";
import ResetForm from "./containers/ResetForm/ResetForm";

const App = (props) => {
  const onSubmit = (formValues) => {
    console.log("values: ", formValues)
    props.addPfdReset(formValues)
  };

  return (
    <div>
      <CheckIn />
      <ResetForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { addPfdReset })(App);
