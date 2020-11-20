import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRecentPfdReset } from "../../store/actions";

const CheckIn = (props) => {
  // console.log(`[CheckIn: ] ${JSON.stringify(props)}`)
  // const [lastReset, setLastReset] = useState(null);

  const { onFetchRecentPfdReset, recentPfdReset } = props;

  useEffect(() => {
    onFetchRecentPfdReset("8675309");
  }, [onFetchRecentPfdReset]);

  let checkIn = <p>Loading...</p>;

  if (recentPfdReset) {
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchRecentPfdReset: (id) => dispatch(fetchRecentPfdReset(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckIn);
