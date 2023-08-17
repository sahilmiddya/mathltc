import React from "react";

import "./hear.css";
const Hear = () => {
  return (
    <div className="hearcont ">
      <div className="line1">
        <div>Back</div>
        <div>Done</div>
      </div>
      <div className="qstn">How did you hear about us?</div>
      <div className="boxes">
        <div className="box1">
          <div className="l">logo</div>
          Forum
        </div>
        <div className="box1">Ads</div>
        <div className="box1">Social Media</div>
        <div className="box1">School</div>
        <div className="box1">Family/Friends</div>
        <div className="box1">Google Search</div>
        <div className="box1">Other</div>
      </div>
      <div className="txar">
        <textarea className="area"  >write to us.....</textarea>
      </div>
      {/* <input type="text" className="inp" /> */}
    </div>
  );
};

export default Hear;
