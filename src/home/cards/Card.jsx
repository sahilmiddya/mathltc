// import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./card.css";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link, useNavigate } from "react-router-dom";
// import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { reverseArrayAsc } from "../../utils/reverseArrayAsc";
// import { quizFormat } from "../../store/quizes/quizSlice";
import { getQuizFormatAsync } from "../../store/quizes/quizAction";

const Card = () => {
  const nav = useNavigate();
  const dispatch= useDispatch()

  const quiz = useSelector((state) => state.quiz);
  const auth = useSelector((state) => state.auth); 
  const quizTypes =
    Array.isArray(quiz?.quizTypes) && reverseArrayAsc(quiz?.quizTypes);

  console.log({ quizTypes });

  const prev = () => {
    // alert("nhbgvfcd");
    nav(-1);
  };
  const goto=( slug)=>{
    dispatch(getQuizFormatAsync(auth?.user?.token , slug))
    nav('/add')
  }
  return (
    <div className="card">
      <div className="cardcontent">
        {quizTypes?.map?.((i) => (
           <>
           <div className="cardttl" onClick={()=>{goto(i.slug)}} >
          <div className="qtitle">{i?.title}</div>
          </div>  </> ))}
      </div>

      <div className="cardbtm">
        <Link to='/home'>
        <span onClick={prev} className="span">
          <ArrowBackIosIcon />
          PREV
        </span></Link>
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

//
