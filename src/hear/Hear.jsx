import { useState } from "react";
import "./hear.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setstate } from "../store/regFlowslice";
import { RegisterAsync } from "../store/authActions";

const Hear = () => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("");
  const [showInput, setShowInput] = useState(false);
  // const [otherValue, setOtherValue] = useState(""); // To store the entered value
  // const [displayValue, setDisplayValue] = useState(""); // To display selected value
  const nav = useNavigate();
  const hearaboutus = useSelector((state) => state.regnflow.hear_about_us);
  const regnflow = useSelector((state) => state.regnflow);

  const back = () => {
    nav(-1);
  };

  const handleBoxClick = (value) => {
    // setSelectedValue(value);

    if (value === "Other") {
      setShowInput(true);
      dispatch(
        setstate({
          hear_about_us: "",
        })
      );
    } else {
      setShowInput(false);
      dispatch(
        setstate({
          hear_about_us: value,
        })
      );
    }
  };

  const handleDoneClick = () => {
    // nav("/home");

    dispatch(
      RegisterAsync(
        {
          username: regnflow.username,
          email: regnflow.email,
          password: regnflow.password,
          confirm_password: regnflow.confirm_password,
          background: regnflow.background,
          background_solid_color: "",
          has_background: true,
          hear_about_us: regnflow.hear_about_us,
          avatar: regnflow.avatar,
          fcm_token: regnflow.fcm_token,
        },
        () => {},
        () => {}
      )
    );
  };
  return (
    <div className="hearbody">
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
          {showInput && (
            <div className="txar">
              <textarea
                className="area"
                placeholder="write to us....."
                value={hearaboutus}
                onChange={(e) =>
                  dispatch(
                    setstate({
                      hear_about_us: e.target.value,
                    })
                  )
                }
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
    </div>
  );
};

export default Hear;
