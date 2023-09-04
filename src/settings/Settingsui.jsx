import { useDispatch, useSelector } from "react-redux";
import { setsettingModalOpen } from "../store/settingslice";
import "./settings.css";
import { deleteAccAsync } from "../store/ProfileActions";
import { toast } from "react-toastify";
import { logoutUser } from "../store/authSlice";
import { logoutUserAction } from "../store/authActions";
import { useState } from "react";

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
      <div className="settingbody">
        <div className="left">
          <div className="range_one">
            <p>some heading</p>
            <div className="timers">
              <div className="set_btn1">btn1</div>
              <div className="set_btn1">btn1</div>
              <div className="set_btn1">btn1</div>
            </div>
            <div className="range">
              <input type="range" />
            </div>
            <div className="onoffbtns">
              {/* ===============================================
               */}

              {/* <input
                type="checkbox"
                checked={isOn}
                onClick={(e) => setIsOn(e.target.val)}
              />
              <br />
              <button onClick={() => setIsOn((prevState) => !prevState)}>
                Toggle
              </button> */}
              {/* =============================================== */}
            </div>
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
