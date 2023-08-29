import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAction } from "../../store/authActions";
import { useState } from "react";
import WardrobeModal from "../wardrobe/WardrobeModal";

const Navbar = () => {
  const [wardrobeModalOpen, setWardrobeModalOpen] = useState(false);

  const handleWardrobeClick = () => {
    setWardrobeModalOpen(true);
  };

  const handleWardrobeModalClose = () => {
    setWardrobeModalOpen(false);
  };

  const dispatch = useDispatch();
  const userprofile = useSelector((state) => state.userdetails.user);

  console.log(userprofile);

  return (
    <div className="nav">
      <div className="nleft">LOGO</div>
      <div className="nmid">
        <div className="nitems">
          <Link to="/home">Home</Link>
        </div>
        <div className="nitems">
          <Link to="/map">Map</Link>
        </div>
        <div className="nitems">
          <Link to="#" onClick={handleWardrobeClick}>
            {" "}
            Wardrobe
          </Link>
        </div>
        <WardrobeModal
          open={wardrobeModalOpen}
          handleClose={handleWardrobeModalClose}
        />
        <div className="nitems">Leaderboard</div>
        <div className="nitems">Help</div>
      </div>
      <div className="nright">
        <div className="set">
          <SettingsIcon />
        </div>
        <div className="set" style={{ marginTop: -10 }}>
          <Tooltip title="Logout">
            <IconButton
              onClick={() => {
                dispatch(logoutUserAction());
              }}
            >
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div
          className="dp"
          style={{
            backgroundImage: `url(${userprofile?.background?.image})`,
            backgroundRepeat: "no-repeat",
            borderRadius: "50%",
            backgroundSize: "cover",
            height: "50px",
            width: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={userprofile?.avatar?.image}
            style={
              {
                // height:'80%,'
              }
            }
            // src="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
