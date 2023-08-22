import React from "react";

import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUserAction } from "../../store/authActions";

const Navbar = () => {
  const dispatch = useDispatch();

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
        <div className="nitems">Wardrobe</div>
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
        <div className="dp">
          <img
            src="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
