import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./card.css";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link, useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import { reverseArrayAsc } from "../../utils/reverseArrayAsc";

const Card = () => {
  const nav = useNavigate();

  const quiz = useSelector((state) => state.quiz);
  const quizTypes =
    Array.isArray(quiz?.quizTypes) && reverseArrayAsc(quiz?.quizTypes);

  console.log({ quizTypes });

  const prev = () => {
    // alert("nhbgvfcd");
    nav(-1);
  };
  return (
    <div className="card">
      <div className="cardcontent">
        {quizTypes?.map((i) => (
          <div>{i?.title}</div>
        ))}
      </div>
      <div className="cardbtm">
        <span onClick={prev} className="span">
          <ArrowBackIosIcon />
          PREV
        </span>
        <MoreHorizIcon />
        <span className="span">
          NEXT
          <ArrowForwardIosIcon />
        </span>
      </div>
    </div>
  );
};

export default Card;

/*

*/
