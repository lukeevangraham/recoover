import React from "react";
import { connect } from "react-redux";

import Aux from "../../hoc/Aux/Aux";
import { signIn, signOut } from "../../store/actions/auth";

import classes from "./GoogleAuth.module.css";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "271794219948-7bc8n311cdthkduegssgstn3dfg5rr08.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  attachedClasses = [classes.btn, classes.btnFull]

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className={this.attachedClasses.join(" ")}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className={this.attachedClasses.join(" ")}>
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    console.log("AUTH: ", this.auth);
    return <Aux>{this.renderAuthButton()}</Aux>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
