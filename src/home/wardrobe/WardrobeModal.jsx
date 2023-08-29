 
import Modal from "@mui/material/Modal";
import Avat4 from "../../avatar/Avat4";
import './WardrobeModal.css' 
import Avatar2 from "./Avatar";

const WardrobeModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="wardrobe-modal-title"
      aria-describedby="wardrobe-modal-description"
    >
      <div className="wardrobe-modal">
        <div className="wardrobe-modal-content">
          {/* <h2 id="wardrobe-modal-title">Wardrobe</h2> */}
          {/* <Avat4/>
           */}
           {/* <Avatar/> */}
           <Avatar2/>
        </div>
      </div>
    </Modal>
  );
};

export default WardrobeModal;
