import React from "react";
import { connect } from "react-redux";

import Aux from "../Aux/Aux";
import { addPfdReset, fetchRecentPfdReset } from "../../store/actions";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import CheckIn from "../../containers/CheckIn/CheckIn";
import ResetForm from "../../containers/ResetForm/ResetForm";

const Layout = (props) => {

  let moreFeatures = null;

  // if (props.isAuthenticated) {
  //   moreFeatures = (
  //     <div className={classes.Content}>
  //       <CheckIn />
  //       <ResetForm onSubmit={onSubmit} />
  //     </div>
  //   );
  // }

  return (
    <Aux>
      <Toolbar isAuth={props.isAuthenticated} />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
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
