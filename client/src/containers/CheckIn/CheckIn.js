import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRecentPfdReset } from "../../store/actions";

const CheckIn = (props) => {

  const { onFetchRecentPfdReset, recentPfdReset } = props;

  useEffect(() => {
    onFetchRecentPfdReset(props.userId);
  }, [onFetchRecentPfdReset]);

  let checkIn = <p>Loading...</p>;

  
  const isValidDate = (d) => d instanceof Date && !isNaN(d)

  if (recentPfdReset) {
    checkIn = (
      <p>No reset date recorded.  Enter one below: </p>
    )
  }
  
  if (recentPfdReset && isValidDate(recentPfdReset)) {
    checkIn = (
      <p>
        You last reset on: {recentPfdReset.toLocaleDateString("en-US")}.
        <br />
        That's{" "}
        {((new Date() - recentPfdReset) / (1000 * 60 * 60 * 24)).toFixed(
          2
        )}{" "}
        days ago.
      </p>
    );
  }

  return <div>{checkIn}</div>;
};

const mapStateToProps = (state) => {
  return {
    recentPfdReset: new Date(state.checkIn.pfdResetDate),
    userId: state.auth.userId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchRecentPfdReset: (id) => dispatch(fetchRecentPfdReset(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckIn);
