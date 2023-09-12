import React, { useState } from "react";
import "./changepw.css"; // Import the CSS file for styling
import { toast } from "react-toastify";
import { changePWasync } from "../../store/changePW";
import { useDispatch, useSelector } from "react-redux";

function ChangePw() {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initialFormData = {
    oldPassword: "",
    newPassword: "",
    retypePassword: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleButtonClick = () => {
    const { oldPassword, newPassword, retypePassword } = formData;

    if (
      oldPassword.trim() === "" ||
      newPassword.trim() === "" ||
      retypePassword.trim() === ""
    ) {
      toast.error("All fields are required.");
      return;
    }

    // Check if the new passwords match
    if (newPassword !== retypePassword) {
      toast.error("Passwords do not match.");
      return;
    }

    // Check if the new password is the same as the old password
    if (newPassword === oldPassword) {
      toast.error("New password cannot be the same as the old password.");
      return;
    }

    // Check if the new password has a length of at least 6 characters
    if (newPassword.length < 6) {
      toast.error("New password must be at least 6 characters long.");
      return;
    }

    // Handle the button click logic here
    console.log("Input 1:", oldPassword);
    console.log("Input 2:", newPassword);
    console.log("Input 3:", retypePassword);

    dispatch(
      changePWasync(
        auth.user.token,
        {
          old_password: formData.oldPassword,
          new_password: formData.newPassword,
          confirm_password: formData.retypePassword,
        },
        (msg) => {
          toast.success(msg.detail);
          setFormData({
            old_password: "",
            new_password: "",
            confirm_password:" "
          });
        },
        (err) => {
          toast.error(err.detail);
        }
      )
    );

    closeModal();
  };

  return (
    <div>
      <div onClick={openModal}>Change Password</div>

      {isModalOpen && (
        <div className="modal_cp">
          <div className="modal-content_cp">
            <p className="p_cp">Change Password</p>

            <div className="states_cp">
              <input
                className="inp_pw"
                type="text"
                name="oldPassword"
                placeholder="Old Password"
                value={formData.oldPassword}
                onChange={handleInputChange}
              />
              <input
                className="inp_pw"
                type="text"
                name="newPassword"
                placeholder="New Password"
                value={formData.newPassword}
                onChange={handleInputChange}
              />
              <input
                className="inp_pw"
                type="text"
                name="retypePassword"
                placeholder="Retype New Password"
                value={formData.retypePassword}
                onChange={handleInputChange}
              />
              <button className="btn_cp" onClick={handleButtonClick}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChangePw;

// import { useState } from "react";
// import "./changepw.css"; // Import the CSS file for styling
// import { toast } from "react-toastify";

// function ChangePw() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [input1, setInput1] = useState("");
//   const [input2, setInput2] = useState("");
//   const [input3, setInput3] = useState("");

//   const [passwordsMatch, setPasswordsMatch] = useState(true);
//   const [allFieldsFilled, setAllFieldsFilled] = useState(true);

//   const [newPasswordSameAsOld, setNewPasswordSameAsOld] = useState(false);
//   const [newPasswordTooShort, setNewPasswordTooShort] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleInputChange1 = (e) => {
//     setInput1(e.target.value);
//   };

//   const handleInputChange2 = (e) => {
//     setInput2(e.target.value);
//     setPasswordsMatch(e.target.value === input3);
//   };

//   const handleInputChange3 = (e) => {
//     setInput3(e.target.value);
//     // Check if the new passwords match
//     setPasswordsMatch(e.target.value === input2);
//   };

//   const handleButtonClick = () => {
//     const fieldsAreFilled =
//       input1.trim() !== "" && input2.trim() !== "" && input3.trim() !== "";
//     setAllFieldsFilled(fieldsAreFilled);
//     // {
//     //   toast.error("Subject and message are required.");
//     //   return;
//     // }

//     if (input2 !== input3) {
//       setPasswordsMatch(false);
//       return;
//     }

//     if (input2 === input1) {
//       setNewPasswordSameAsOld(true);
//       return;
//     }

//     if (input2.length < 6) {
//       setNewPasswordTooShort(true);
//       return;
//     }

//     if (fieldsAreFilled) {
//       // Handle the button click logic here
//       console.log("Input 1:", input1);
//       console.log("Input 2:", input2);
//       console.log("Input 3:", input3);

//     }
//   };

//   return (
//     <div>
//       <div
//         // className="setbtn5"
//         //   className="open-modal"
//         onClick={openModal}
//       >
//         Change Password
//       </div>

//       {isModalOpen && (
//         <div className="modal_cp">
//           <div className="modal-content_cp">
//             <p className="p_cp"> Change Password</p>

//             <div className="states_cp">
//               <input
//                 className="inp_pw"
//                 type="text"
//                 placeholder="Old Password"
//                 value={input1}
//                 onChange={handleInputChange1}
//               />
//               <input
//                 className={`inp_pw ${!passwordsMatch ? "error" : ""}`}
//                 type="text"
//                 placeholder="New Password"
//                 value={input2}
//                 onChange={handleInputChange2}
//               />
//               <input
//                 className={`inp_pw ${!passwordsMatch ? "error" : ""}`}
//                 type="text"
//                 placeholder="Retype New Password"
//                 value={input3}
//                 onChange={handleInputChange3}
//               />
//               {!passwordsMatch && (
//                 <p className="error-text">Passwords do not match.</p>
//               )}
//               {!allFieldsFilled && (
//                 <p className="error-text">All fields are required.</p>
//               )}
//               {newPasswordSameAsOld && (
//                 <p className="error-text">
//                   New password cannot be the same as the old password.
//                 </p>
//               )}
//               {newPasswordTooShort && (
//                 <p className="error-text">
//                   New password must be at least 6 characters long.
//                 </p>
//               )}
//               <button className="btn_cp" onClick={handleButtonClick}>
//                 Submit
//               </button>
//             </div>
//             {/* <button className="btn_cp" onClick={closeModal}>
//               Close
//             </button> */}
//             {/* </div> */}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ChangePw;
