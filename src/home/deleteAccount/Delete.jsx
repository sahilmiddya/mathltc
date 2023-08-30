import { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate } from "react-router-dom";

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  maxWidth: "400px",
  width: "100%",
  padding: "2rem",
};

const buttonStyle = {
  backgroundColor: "pink",
  color: "white",
  border: "none",
  padding: "0.5rem 1rem",
  cursor: "pointer",
  margin: "1rem",
};

function Delete() {
  const nav = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState(false);

  const handleCloseDeleteModal = () => setShowDeleteModal(false);
  const handleShowDeleteModal = () => setShowDeleteModal(true);

  const handleCloseConfirmationModal = () => setShowConfirmationModal(false);
  const handleShowConfirmationModal = () => setShowConfirmationModal(true);

  const handleCloseThirdModal = () => {
    setShowConfirmationModal(false);
    setShowDeleteModal(false);

    setShowThirdModal(true);
  };
  const finalbtn = () => {
    setShowThirdModal(false);
    nav("/map");
  };

  return (
    <div>
      <nav>
        <button
          // style={buttonStyle}
          onClick={handleShowDeleteModal}
        >
          <DeleteOutlineIcon />
        </button>
      </nav>

      {showDeleteModal && (
        <div style={{ ...modalStyle, display: "block" }}>
          {" "}
          <h2>By deleting your account:</h2>
          <img
            src="https://images.pexels.com/photos/6408290/pexels-photo-6408290.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <p>
            - You will lose all your progress. <br></br>- Your username can be
            taken.<br></br> - We will no longer have your email address on our
            server after 30 days.
          </p>
          <button style={buttonStyle} onClick={handleShowConfirmationModal}>
            Delete my account
          </button>
          <button
            style={{ ...buttonStyle, backgroundColor: "#ccc" }}
            onClick={handleCloseDeleteModal}
          >
            Keep my account
          </button>
        </div>
      )}

      {showConfirmationModal && (
        <div style={{ ...modalStyle, display: "block" }}>
          <p>
            Hey, it’s Coco. Sorry you want to delete your account. We’ll get rid
            of your data in 30 days’ time, but you can always change your mind
            during this period! Write to us from your registered email address
            if you want to do so. (That’s what I’d do if I were you)
          </p>
          <button style={buttonStyle} onClick={handleCloseThirdModal}>
            Yes, I am sure
          </button>
          <button
            style={{ ...buttonStyle, backgroundColor: "#ccc" }}
            onClick={handleCloseConfirmationModal}
          >
            Cancel
          </button>
        </div>
      )}

      {showThirdModal && (
        <div style={{ ...modalStyle, display: "block" }}>
          <h2>Third Modal</h2>
          <p>This is the third modal that appears after confirming.</p>
          <button
            style={{ ...buttonStyle, backgroundColor: "#ccc" }}
            onClick={finalbtn}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Delete;
