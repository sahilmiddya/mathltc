import Modal from "@mui/material/Modal";
import "./settingModal.css";
import Settingsui from "./Settingsui";
import { useState } from "react";
import { settingAsync } from "../store/settingActions";

const SettingModal = ({ open, handleClose }) => {
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

const settingupdate=()=>{
  dispatch(
    settingAsync(
      auth.user.token,
      {
        // ""user"": 1,
        // ""enable_vibrations"": true,
        // ""enable_sound_effects"": true,
        // ""sound_effects"": """",
        // ""enable_background_music"": true,
        // ""background_music"": """",
        // ""numpad_color"": """",
        // ""active_font"": """",
        // ""custom_timer"": 120,
        // ""active_language"": """",
        // ""clock_type"": """"
    },
      (msg) => {  

        toast.success(msg.detail);
      },
      (err) => {
        toast.error(err.detail);
      }
    )
  );
}


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
      <div className="setting-modal">
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
