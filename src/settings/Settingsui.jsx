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
  const [settingsData, setSettingsData] = useState({
    active_font: null,
    active_language: null,
    background_music: null,
    custom_timer: 0,
    enable_background_music: true,
    enable_sound_effects: true,
    enable_practice_clock: true,
    enable_vibrations: true,
    numpad_color: null,
    sound_effects: null,
    invert_numpad: null,
    // user: 56,
  });
  const user_name = useSelector((state) => state.userdetails.user.username);

  const user_email = useSelector((state) => state.userdetails.user.email);

  const user_avatar = useSelector(
    (state) => state.userdetails.user.avatar.image
  );
  const user_bg = useSelector(
    (state) => state.userdetails.user.background.image
  );
  console.log(settingsData.custom_timer);
  // const [isOn, setIsOn] = useState(false);
  const auth = useSelector((state) => state.auth);
  let dispatch = useDispatch();

  // console.log(settingsData.t);
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
    <div className="full_settings">
      <h2>SETTINGS</h2>
      <div className="settingbody">
        <div className="left">
          <div className="range_one">
            <p>Select your timer (min)</p>
            <div className="timers">
              <div
                className="set_btn1"
                style={{
                  backgroundColor:
                    settingsData.custom_timer === 2 ? "#ffd0d0" : "",
                }}
                onClick={() =>
                  setSettingsData({
                    ...settingsData,
                    custom_timer: 2,
                  })
                }
              >
                2min
              </div>
              <div
                className="set_btn1"
                style={{
                  backgroundColor:
                    settingsData.custom_timer === 3 ? "#ffd0d0" : "",
                }}
                onClick={() =>
                  setSettingsData({
                    ...settingsData,
                    custom_timer: 3,
                  })
                }
              >
                3min
              </div>
              <div
                className="set_btn1"
                style={{
                  backgroundColor:
                    settingsData.custom_timer === 5 ? "#ffd0d0" : "",
                }}
                onClick={() =>
                  setSettingsData({
                    ...settingsData,
                    custom_timer: 5,
                  })
                }
              >
                5min
              </div>
            </div>
            <div className="range">
              <input
                type="range"
                step={1}
                min={1}
                value={settingsData.custom_timer}
                max={15}
                onChange={(e) =>
                  setSettingsData({
                    ...settingsData,
                    custom_timer: Number(e.target.value),
                  })
                }
              />
            </div>
          </div>
          <div className="onoffbtns">
            <div className="toggler">
              <p>Practice Clock</p>
              <Toggle
                checked={settingsData.enable_practice_clock}
                onChange={(e) =>
                  setSettingsData({
                    ...settingsData,
                    enable_practice_clock: e.target.checked,
                  })
                }
              />
            </div>
            <div className="toggler">
              <p>Sound Effects</p>
              <Toggle
                checked={settingsData.enable_sound_effects}
                onChange={(e) =>
                  setSettingsData({
                    ...settingsData,
                    enable_sound_effects: e.target.checked,
                  })
                }
              />
            </div>
            <div className="toggler">
              <p>Background Music</p>
              <Toggle
                checked={settingsData.enable_background_music}
                onChange={(e) =>
                  setSettingsData({
                    ...settingsData,
                    enable_background_music: e.target.checked,
                  })
                }
              />
            </div>
            <div className="toggler">
              <p>Invert Numpad</p>
              <Toggle
                checked={settingsData.invert_numpad}
                onChange={(e) =>
                  setSettingsData({
                    ...settingsData,
                    invert_numpad: e.target.checked,
                  })
                }
              />
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
            <h3>Keypad Theme</h3>
            <div className="color_body">
              {Object.keys(numpadColors).map((key, idx) => (
                <div
                  className="ccbox color_combo_1"
                  key={idx}
                  onClick={() =>
                    setSettingsData({ ...settingsData, numpad_color: key })
                  }
                >
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
            <div className="feedback_form_body">
              {" "}
              <h3 className="feed_form">Feedback </h3>
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
          <div className="right_top">
            <div
              className="avatar_setting"
              style={{
                backgroundImage: `url(${user_bg})`,
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                display: "flex", 
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={user_avatar} alt="" />
            </div>
            <div className="creds">
              <p className="right_name">{user_name}</p>
              <p className="right_email">{user_email}</p>
            </div>
          </div>
          <button
            className="setbtn3"
            onClick={() => {
              dispatch(logoutUserAction());
            }}
          >
            Logout
          </button>
          <button className="setbtn3">Change Password</button>
          <button
            className="setbtn3 deletebtn"
            onClick={deleteac}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Delete />
            Delete Account
          </button>
        </div>
      </div>
      <button onClick={closemodal} className="close_btn">
        close
      </button>
    </div>
  );
};

export default Settingsui;
