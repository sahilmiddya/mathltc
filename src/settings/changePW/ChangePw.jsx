import { useState } from "react";
import "./changepw.css"; // Import the CSS file for styling

function ChangePw() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange1 = (e) => {
    setInput1(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setInput2(e.target.value);
  };

  const handleInputChange3 = (e) => {
    setInput3(e.target.value);
  };

  const handleButtonClick = () => {
    // Handle the button click logic here
    // You can access input1, input2, and input3 values here.
    console.log("Input 1:", input1);
    console.log("Input 2:", input2);
    console.log("Input 3:", input3);

    // Close the modal
    closeModal();
  };

  return (
    <div>
      <div
        // className="setbtn5"
        //   className="open-modal"
        onClick={openModal}
      >
        Change Password
      </div>

      {isModalOpen && (
        <div className="modal_cp">
          <div className="modal-content_cp">
            <p className="p_cp"> Change Password</p>

            <div className="states_cp">
              <input
                className="inp_pw"
                type="text"
                placeholder="Old Password"
                value={input1}
                onChange={handleInputChange1}
              />
              <input
                className="inp_pw"
                type="text"
                placeholder="New Password"
                value={input2}
                onChange={handleInputChange2}
              />
              <input
                className="inp_pw"
                type="text"
                placeholder="Retype New Password"
                value={input3}
                onChange={handleInputChange3}
              />
              {/* <button className="btn_cp" onClick={closeModal}>
              Close
            </button> */}
              <button className="btn_cp" onClick={handleButtonClick}>
                Submit
              </button>
            </div>
          </div>{" "}
        </div>
      )}
    </div>
  );
}

export default ChangePw;
