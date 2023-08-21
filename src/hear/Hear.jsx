import React, { useState } from "react";
import "./hear.css";
import { useNavigate } from "react-router-dom";

const Hear = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [otherValue, setOtherValue] = useState(""); // To store the entered value
  const [displayValue, setDisplayValue] = useState(""); // To display selected value
  const nav = useNavigate();

  const back = () => {
    nav(-1);
  };

  const handleBoxClick = (value) => {
    setSelectedValue(value);
    console.log(value);
    if (value === "Other") {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  };

  const handleDoneClick = () => {
    nav('/home')
    if (selectedValue === "Other") {
      setDisplayValue(otherValue);
      console.log('ngfds');
      // Show entered value
    } else {
      setDisplayValue(selectedValue);
      // setDisplayValue("") // Show selected value
      console.log('done')
    }
  };
  return (
    <div className="hearcont">
      <div className="line1">
        <div className="nxt" onClick={back}>
          Back
        </div>
        <div onClick={handleDoneClick}>Done</div>{" "}
      </div>
      <div className="qstn">How did you hear about us?</div>
      <div className="boxes">
        <div
          className={`box1 ${selectedValue === "Forum" ? "selected" : ""}`}
          onClick={() => handleBoxClick("Forum")}
        >
          Forum
        </div>
        <div
          className={`box1 ${selectedValue === "Ads" ? "selected" : ""}`}
          onClick={() => handleBoxClick("Ads")}
        >
          Ads
        </div>
        <div
          className={`box1 ${
            selectedValue === "Social Media" ? "selected" : ""
          }`}
          onClick={() => handleBoxClick("Social Media")}
        >
          Social Media
        </div>
        <div
          className={`box1 ${selectedValue === "School" ? "selected" : ""}`}
          onClick={() => handleBoxClick("School")}
        >
          School
        </div>
        <div
          className={`box1 ${
            selectedValue === "Family/Friends" ? "selected" : ""
          }`}
          onClick={() => handleBoxClick("Family/Friends")}
        >
          Family/Friends
        </div>
        <div
          className={`box1 ${
            selectedValue === "Google Search" ? "selected" : ""
          }`}
          onClick={() => handleBoxClick("Google Search")}
        >
          Google Search
        </div>

        <div
          className={`box1 ${selectedValue === "Other" ? "selected" : ""}`}
          onClick={() => handleBoxClick("Other")}
        >
          Other
        </div>
      </div>
      <div className="inputtag">
        {showInput && selectedValue === "Other" && (
          <div className="txar">
            <textarea
              className="area"
              placeholder="write to us....."
              value={otherValue}
              onChange={(e) => setOtherValue(e.target.value)}
            ></textarea>
          </div>
        )}
      </div>
      {/* <div
        className="qstn" // className="displayValue"
      >
        {displayValue && (
          <div>
            <i>{displayValue}</i>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Hear;
