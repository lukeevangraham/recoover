import React, { useState, useEffect } from "react";
import axios from "axios";

const CheckIn = (props) => {
  const [lastReset, setLastReset] = useState(null);

  useEffect(() => {
    getLastReset();
  }, []);

  // Get checkIn data
  const getLastReset = async () => {
    const result = await axios.get(`http://localhost:3001/checkIns/8675309`);
    console.log(result);
    setLastReset(new Date(result.data[0].date));
  };

  let checkIn = <p>Loading...</p>;

  if (lastReset) {
    checkIn = (
      <p>You last checked in on: {lastReset.toLocaleDateString("en-US")}</p>
    );
  }

return <div>{checkIn}</div>;
};

export default CheckIn;
