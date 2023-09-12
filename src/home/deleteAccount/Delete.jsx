import { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate } from "react-router-dom";
import "./delete.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteAccAsync } from "../../store/ProfileActions";
import { logoutUser } from "../../store/authSlice";
import { toast } from "react-toastify";

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
  // const nav = useNavigate();
  const disp = useDispatch();
  const auth = useSelector((state) => state.auth);
  const openDeleteModal = useSelector(
    (state) => state.userdetails.openDeleteModal
  );
  console.log({ openDeleteModal });

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

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
    disp(
      deleteAccAsync(
        auth.user.token,
        {
          password: inputValue,
        },
        (msg) => {
          // nav("/map");
          disp(logoutUser());
          setShowThirdModal(false);
          toast.success(msg.detail);
        },
        (err) => {
          toast.error(err.detail);
        }
      )
    );
  };

  return (
    <div>
      <nav>
        <button
          className="deleteicon"
          // style={buttonStyle}
          onClick={handleShowDeleteModal}
        >
          {/* <DeleteOutlineIcon /> */}
          <div className="setbtn4 ">

          Delete Account
          </div>
        </button>
      </nav>

      {showDeleteModal && (
        <div style={{ ...modalStyle, display: "block" }}>
          <h2>By deleting your account:</h2>
          <img
            src="https://images.pexels.com/photos/6408290/pexels-photo-6408290.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <p>
            - You will lose all your progress. <br></br>- Your username can be
            taken.<br></br> - We will no longer have your email address on our
            server after 30 days.
          </p>{" "}
          <button
            className="keepacc"
            // style={{ ...buttonStyle, backgroundColor: "#ccc" }}
            onClick={handleCloseDeleteModal}
          >
            Keep my account
          </button>
          <button
            // style={buttonStyle}
            className="delmyacc"
            onClick={handleShowConfirmationModal}
          >
            Delete my account
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
          <div className="modal2btn">
            <button
              //  style={buttonStyle}
              className="delbtn"
              onClick={handleCloseThirdModal}
            >
              delete
            </button>
            <button
              className="keepbtn"
              // style={{ ...buttonStyle, backgroundColor: "#ccc" }}
              onClick={handleCloseConfirmationModal}
            >
              keep
            </button>
          </div>
        </div>
      )}

      {showThirdModal && (
        <div style={{ ...modalStyle, display: "block" }}>
          <div className="thirdmodal">
            <p className="thirdp">Enter your password to confirm</p>
            <input
              type="password"
              className="thirdinp"
              onChange={handleInputChange}
            />
            <button
              // style={{ ...buttonStyle, backgroundColor: "#ccc" , }}
              onClick={finalbtn}
              className="redbtns"
            >
              DELETE
            </button>{" "}
          </div>
        </div>
      )}
    </div>
  );
}

export default Delete;
