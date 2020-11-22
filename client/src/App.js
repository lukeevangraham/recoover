import React from "react";
import { connect } from "react-redux";
import { addPfdReset, fetchRecentPfdReset } from "./store/actions/";
import Layout from "./hoc/Layout/Layout"

const App = (props) => {

  return (
    <div>
      <Layout />
    </div>
  );
};

export default App;
