import React, { useEffect } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../store/actions/auth";

const GoogleAuth = (props) => {
  let auth = null;
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "271794219948-7bc8n311cdthkduegssgstn3dfg5rr08.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          auth = window.gapi.auth2.getAuthInstance();

          onAuthChange(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  const onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      props.signIn(auth.currentUser.get().getId());
    } else {
      props.signOut();
    }
  };

  const onSignInClick = () => {
    auth.signIn();
  };

  const onSignOutClick = () => {
    auth.signOut();
  };

  const renderAuthButton = () => {
    if (props.isSignedIn === null) {
      return null;
    } else if (props.isSignedIn) {
      return (
        <button onClick={onSignOutClick} style={{ backgroundColor: "red" }}>
          SIGN OUT
        </button>
      );
    } else {
      return (
        <button onClick={onSignInClick} style={{ backgroundColor: "green" }}>
          SIGN IN WITH GOOGLE
        </button>
      );
    }
  };

  return <div>{renderAuthButton}</div>;
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
