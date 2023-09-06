import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import "./navbar.css";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAction } from "../../store/authActions";
// import { useState } from "react";

import WardrobeModal from "../wardrobe/WardrobeModal";
import SettingModal from "../../settings/settingModal";
import { setWardrobeModalOpen } from "../../store/ProfileSlice";
import Delete from "../deleteAccount/Delete";
import { setsettingModalOpen } from "../../store/settingslice";

const Navbar = () => {
  const wardrobeModalOpen = useSelector(
    (state) => state.userdetails.wardrobeModalOpen
  );

  const settingmodalopen = useSelector(
    (state) => state.settings.settingModalOpen
  );
  let dispatch = useDispatch();
  console.log(settingmodalopen);
  const handleWardrobeClick = () => {
    dispatch(setWardrobeModalOpen(true));
  };

  const handleWardrobeModalClose = () => {
    dispatch(setWardrobeModalOpen(false));
  };
  const onsettingModal = () => {
    console.log("RGBsbjnvkj");
    dispatch(setsettingModalOpen());
  };

  const userprofile = useSelector((state) => state.userdetails.user);

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
        <div className="setdelete">
          <Delete />
        </div>
        <div className="set">
          <SettingModal open={settingmodalopen}
          handleClose={()=>dispatch(setsettingModalOpen())} />
          <Link to="#" onClick={onsettingModal}>
            <SettingsIcon />
          </Link>
        </div>
        <div className="set">
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
            // className="navimg"
            onClick={handleWardrobeClick}
            src={userprofile?.avatar?.image}
            style={
              {
                // height:'80%,'
              }
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
