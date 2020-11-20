import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchRecentPfdReset } from "../store/actions/";

const CheckIn = (props) => {
  // console.log(`[CheckIn: ] ${JSON.stringify(props)}`)
  console.log(props)
  // const [lastReset, setLastReset] = useState(null);

  const { onFetchRecentPfdReset } = props;

  useEffect(() => {
    // getLastReset();
    onFetchRecentPfdReset("8675309")
  }, [onFetchRecentPfdReset]);

  // Get checkIn data
  // const getLastReset = async () => {
  //   const result = await axios.get(`http://localhost:3001/checkIns/8675309`);
  //   console.log(result);
  //   setLastReset(new Date(result.data[0].date));
  // };

  let checkIn = <p>Loading...</p>;

  if (props.recentPfdReset) {
    checkIn = (

      <p>You last checked in on: {new Date(props.recentPfdReset).toLocaleDateString("en-US")}</p>
    );
  }

  return <div>{checkIn}</div>;
};

const mapStateToProps = state => {
  return {
    recentPfdReset: state.checkIn.pfdResetDate
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchRecentPfdReset: (id) => dispatch(fetchRecentPfdReset(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckIn);
