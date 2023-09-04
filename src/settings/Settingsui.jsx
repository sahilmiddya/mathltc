import { useDispatch, useSelector } from "react-redux";
import { setsettingModalOpen } from "../store/settingslice";
import "./settings.css";
import { deleteAccAsync } from "../store/ProfileActions";
import { toast } from "react-toastify";
import { logoutUser } from "../store/authSlice";
import { logoutUserAction } from "../store/authActions";

const Settingsui = () => {
  const auth = useSelector((state) => state.auth);
  let dispatch = useDispatch();

  const closemodal = () => {
    dispatch(setsettingModalOpen(false));
  };
 
  const deleteac =()=>{
    dispatch(
      deleteAccAsync(
        auth.user.token,
        {
          password: inputValue,
        },
        (msg) => {
          // nav("/map");
          dispatch(logoutUser())
          
          toast.success(msg.detail)
        },
        (err) => {
          toast.error(err.detail)
        }
      )
    );
  }
  return (
    <>
      <div className="settingbody">
        <div className="left">left</div>
        <div className="right">
          <p>
          avatar and usernames</p>
          <button className="setbtn3"  onClick={() => {
                dispatch(logoutUserAction());
              }}>Logout</button>
          <button className="setbtn3">Change Password</button>
          <button className="setbtn3" onClick={deleteac}>Delete Account</button>
        </div>
      </div>

      <button onClick={closemodal}>close</button>
    </>
  );
};

export default Settingsui;
