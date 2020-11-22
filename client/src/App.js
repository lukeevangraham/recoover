import React from "react";
import { connect } from "react-redux";
import { addPfdReset, fetchRecentPfdReset } from "./store/actions/";
import CheckIn from "./containers/CheckIn/CheckIn";
import ResetForm from "./containers/ResetForm/ResetForm";
import GoogleAuth from "./containers/GoogleAuth/GoogleAuth"

const App = (props) => {
  console.log("PROPS: ", props);
  const onSubmit = (formValues) => {
    props.addPfdReset(formValues);
  };

  return (
    <div>
      {/* <GoogleAuth /> */}
      <CheckIn />
      <ResetForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { addPfdReset, fetchRecentPfdReset })(App);
