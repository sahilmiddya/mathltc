import Modal from "@mui/material/Modal";
import "./settingModal.css";
import Settingsui from "./Settingsui";

const SettingModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="setting-modal-title"
      aria-describedby="setting-modal-description"
    >
      <div className="setting-modal">
        <div className="setting-modal-content"> 
          <Settingsui close={handleClose} />
        </div>
      </div>
    </Modal>
  );
};

export default SettingModal;
