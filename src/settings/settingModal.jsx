import Modal from "@mui/material/Modal";
import "./settingModal.css";
import Settingsui from "./Settingsui";
import { useState } from "react";

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

  return (
    <Modal
      open={open}
      onClose={handleClose}
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
