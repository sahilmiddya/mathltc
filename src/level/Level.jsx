import React from "react";
import Navbar from "../home/navbar/Navbar";

import "./level.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Level = () => {
  const quizLevel= useSelector(state=>state.quiz.quizLevel)

  return (
    
    <div>
      <Navbar />
      <h2>Select Level</h2>
      {/* <div className="lcard">
        <Link to='/math'>
        <div className="lcard1">
          <img
            src="https://images.pexels.com/photos/16179987/pexels-photo-16179987/free-photo-of-analog-vibes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className="limg"
          />
          level1
        </div>
        </Link>
        <div className="lcard2">
          {" "}
          <img
            src="https://images.pexels.com/photos/16179987/pexels-photo-16179987/free-photo-of-analog-vibes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className="limg"
          />
          level2
        </div>
      </div> */}
    </div>
  );
};

export default Level;
