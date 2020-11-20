import React, { useState } from "react";

const ResetForm = (props) => {
  const [pfdResetDate, setPfdResetDate] = useState(null)
  const [enteredLastResetDate, setEnteredLastResetDate] = useState(null)
  const [enteredLastResetTime, setEnteredLastResetTime] = useState(null)

  // state = {
  //   pfdResetDate: null,
  //   enteredLastResetDate: null,
  //   enteredLastResetTime: null,
  // };

  resetPfdDate = () => {
    console.log("DATE ENTERED!", enteredLastResetDate, enteredLastResetTime);
  };

  handleFormInput = (event, inputIdentifier) => {
    console.log("Input changed!", event.target.value, event.target.name);
    // this.setState({ [event.target.name]: event.target.value });

  };


    console.log(`STATE: ${this.state.enteredLastResetDate}`);
    return (
      <div>
        <p>App</p>
        <form>
          <input
            type="date"
            name="enteredLastResetDate"
            id=""
            onChange={(event) => handleFormInput(event)}
          />
          <select
            name="enteredLastResetTime"
            id=""
            onChange={this.handleFormInput}
          >
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
            <option value="night">Night</option>
          </select>
        </form>
        <button onClick={this.resetPfdDate}>Click to reset PFD</button>
      </div>
    );

}

export default ResetForm;
