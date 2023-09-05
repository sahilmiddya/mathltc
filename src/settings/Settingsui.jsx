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

const Settingsui = () => {
  const [isOn, setIsOn] = useState(false);
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
          <h3>MUSIC</h3>
          <div className="musicbtns">
            <div className="mus_btn1">Freedom</div>
            <div className="mus_btn2">Turkish</div>
          </div>
          <h3>FONTS</h3>
          <div className="font_btns">
            <div className="font_btn1">Fredroka</div>
            <div className="font_btn2">Inter</div>
            <div className="font_btn2">Fredroka One</div>
          </div>
          <div className="keypad_theme">
            <h3>KEYPAD COLORS</h3>
            <div className="color_body">
              <div className="ccbox color_combo_1">
                <div className="cc_left"> </div>
                <div className="cc_right"> </div>
              </div>
              <div className="ccbox color_combo_2">
                <div className="cc_left2"> </div>
                <div className="cc_right2"> </div>
              </div>
            </div>
          </div>
          <div className="feedback_form">
            <h3>Feedback Form</h3>
            <input type="text" className="feedinp" />
            <textarea
              name="text"
              className="feedtxt"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div className="right">
          <p>avatar and usernames</p>
          <button
            className="setbtn3"
            onClick={() => {
              dispatch(logoutUserAction());
            }}
          >
            Logout
          </button>
          <button className="setbtn3">Change Password</button>
          <button className="setbtn3" onClick={deleteac}>
            Delete Account
          </button>
        </div>
      </div>
      <button onClick={closemodal}>close</button>
    </>
  );
};

export default Settingsui;
