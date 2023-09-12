import Modal from "@mui/material/Modal";
import "./settingModal.css";
import Settingsui from "./Settingsui";
import { useEffect, useState } from "react";
import { getsettingAsync, settingAsync } from "../store/settingActions";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { updatesettingsdata } from "../store/settingslice";

const SettingModal = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const settingsInfo = useSelector((state) => state.settings.settingData);
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

  useEffect(() => {
    dispatch(
      getsettingAsync(
        auth.user.token,
        auth.user.displayName,
        () => {},
        () => {}
      )
    );
  }, []);

  useEffect(() => {
    setSettingsData(settingsInfo);
  }, [settingsInfo]);

  const settingupdate = () => {
    dispatch(
      settingAsync(
        auth.user.token,
        auth.user.displayName,
        {
          user: auth.user.id,
          enable_vibrations: settingsData.enable_vibrations,
          enable_sound_effects: settingsData.enable_sound_effects,
          // sound_effects: ,
          enable_background_music: settingsData.enable_background_music,
          background_music: settingsData.background_music,
          numpad_color: settingsData.numpad_color,
          active_font: settingsData.active_font,
          custom_timer: settingsData.custom_timer,
          active_language: settingsData.active_language,
          // clock_type:
        },
        (msg) => {
          toast.success(msg.detail);
          handleClose();
          dispatch( //get the data and update immediately on modal close
            getsettingAsync(
              auth.user.token,
              auth.user.displayName,
              () => {},
              () => {}
            )
          );
        },
        (err) => {
          toast.error(err.detail);
        }
      )
    );
  };

  const active_font=useSelector((state)=>state.settings.settingData?.active_font)
  return (
    <Modal
      open={open}
      onClose={settingupdate}
      aria-labelledby="setting-modal-title"
      aria-describedby="setting-modal-description"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="setting-modal" style={{fontFamily:`${active_font},serif`}}>
        <div className="setting-modal-content">
          <Settingsui
            close={handleClose}
            settingsData={settingsData}
            setSettingsData={setSettingsData}
          />
        </div>
      </div>
    </Modal>
  );
};

export default SettingModal;
