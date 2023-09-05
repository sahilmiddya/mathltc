import { useDispatch, useSelector } from "react-redux";
import { setsettingModalOpen } from "../store/settingslice";
import "./settings.css";
import { deleteAccAsync } from "../store/ProfileActions";
import { toast } from "react-toastify";
import { logoutUser } from "../store/authSlice";
import { logoutUserAction } from "../store/authActions";
import Delete from "../home/deleteAccount/Delete";
import { useState } from "react";
import Toggle from "../togglebtn/Toggle";
import { numpadColors } from "../constants/numpadColors";

const Settingsui = () => {
  const user_name = useSelector((state) => state.userdetails.user.username);

  const user_email = useSelector((state) => state.userdetails.user.email);
  console.log(user_name, user_email);
  // const [isOn, setIsOn] = useState(false);
  const auth = useSelector((state) => state.auth);
  let dispatch = useDispatch();

  const closemodal = () => {
    dispatch(setsettingModalOpen(false));
  };

  const deleteac = () => {
    dispatch(
      deleteAccAsync(
        auth.user.token,
        {
          password: inputValue,
        },
        (msg) => {
          // nav("/map");
          dispatch(logoutUser());

          toast.success(msg.detail);
        },
        (err) => {
          toast.error(err.detail);
        }
      )
    );
  };

  console.log(numpadColors["one"].background);
  return (
    <>
      {" "}
      <h2>SETTINGS</h2>
      <div className="settingbody">
        <div className="left">
          <div className="range_one">
            <p>Select your timer (min)</p>
            <div className="timers">
              <div className="set_btn1">2 min</div>
              <div className="set_btn1">3 min</div>
              <div className="set_btn1">4 min</div>
            </div>
            <div className="range">
              <input type="range" />
            </div>
          </div>
          <div className="onoffbtns">
            <div className="toggler">
              <p>Practice Clock</p>
              <Toggle />
            </div>
            <div className="toggler">
              <p>Sound Effects</p>
              <Toggle />
            </div>
            <div className="toggler">
              <p>Background Music</p>
              <Toggle />
            </div>
            <div className="toggler">
              <p>Invert Numpad</p>
              <Toggle />
            </div>
          </div>{" "}
          <h3 style={{ marginTop: 12 }}>MUSIC</h3>
          <div className="musicbtns">
            <div className="mus_btn1">Freedom</div>
            <div className="mus_btn2">Turkish</div>
          </div>
          <h3 style={{ marginTop: 24 }}>FONTS</h3>
          <div className="font_btns">
            <div className="font_btn1">Fredroka</div>
            <div className="font_btn2">Inter</div>
            {/* <div className="font_btn3">Fredroka One</div> */}
          </div>
          <div className="keypad_theme" style={{ marginTop: 24 }}>
            <h3>KEYPAD COLORS</h3>
            <div className="color_body">
              {Object.keys(numpadColors).map((key, idx) => (
                <div className="ccbox color_combo_1" key={idx}>
                  <div
                    className="cc_left"
                    style={{
                      backgroundColor: numpadColors[key].background,
                      width: "100%",
                    }}
                  ></div>
                  <div
                    className="cc_right"
                    style={{
                      backgroundColor: numpadColors[key].foreground,
                      width: "100%",
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="feedback_form"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h3 className="feed_form">Feedback Form</h3>
            <div className="feedback_form_body">
              <input
                type="text"
                className="feedinp"
                style={{
                  backgroundColor: "white",
                  border: "1px solid black",
                  padding: "0.5rem 1rem",
                  outline: "none",
                }}
              />
              <textarea
                name="text"
                className="feedtxt"
                id=""
                cols="30"
                rows="10"
                style={{
                  backgroundColor: "white",
                  border: "1px solid black",
                  padding: "0.5rem 1rem",
                  outline: "none",
                  borderRadius: "10px",
                }}
              ></textarea>
              <button className="feed_btn">submit</button>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="creds">
          <p className="right_name">{user_name}</p>
          <p className="right_email">{user_email}</p>
          </div> <button
            className="setbtn3"
            onClick={() => {
              dispatch(logoutUserAction());
            }}
          >
            Logout
          </button>
          <button className="setbtn3">Change Password</button>
          <button className="setbtn3 deletebtn" onClick={deleteac}>
            Delete Account
            <Delete />
          </button>
        </div>
      </div>
      <button onClick={closemodal} className="close_btn">
        close
      </button>
    </>
  );
};

export default Settingsui;
