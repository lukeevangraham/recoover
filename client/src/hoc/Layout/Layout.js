import React from "react";
import { connect } from "react-redux";
import { addPfdReset, fetchRecentPfdReset } from "../../store/actions";
import CheckIn from "../../containers/CheckIn/CheckIn";
import ResetForm from "../../containers/ResetForm/ResetForm";
import GoogleAuth from "../../containers/GoogleAuth/GoogleAuth";

const Layout = (props) => {
  const onSubmit = (formValues) => {
    formValues.userId = props.userId;
    props.addPfdReset(formValues);
  };

  let moreFeatures = null;

  if (props.isAuthenticated) {
    moreFeatures = (
      <React.Fragment>
        <CheckIn />
        <ResetForm onSubmit={onSubmit} />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <GoogleAuth />
      {moreFeatures}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.userId !== null,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { addPfdReset, fetchRecentPfdReset })(
  Layout
);
