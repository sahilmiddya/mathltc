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
import {
  quizQuestions,
  resetQuizQuestions,
  selectQuizType,
  setcount,
} from "../../store/quizes/quizSlice";

const Card = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const quiz = useSelector((state) => state.quiz);
  const auth = useSelector((state) => state.auth);
  const quizTypes =
    Array.isArray(quiz?.quizTypes) && reverseArrayAsc(quiz?.quizTypes);

  const prev = () => {
    // alert("nhbgvfcd");
    nav(-1);
  };
  const goto = (slug, quizType) => {
    dispatch(setcount(0));
    dispatch(resetQuizQuestions());

    dispatch(getQuizFormatAsync(auth?.user?.token, slug));
    dispatch(selectQuizType(quizType));
    nav("/add");
  };

  return (
    <div className="card">
      <div className="cardcontent">
        {quizTypes?.map?.((i, index) => (
          <>
            <div
              className="cardttl"
              onClick={() => {
                goto(i.slug, i);
              }}
            >
              <div
                className="qtitle"
                style={{
                  backgroundColor: getQuizTypeBgColor(index),
                }}
              >
                {i?.title}
              </div>
            </div>{" "}
          </>
        ))}
      </div>

      <div className="cardbtm">
        <Link to="/home">
          <span onClick={prev} className="span">
            <ArrowBackIosIcon />
            PREV
          </span>
        </Link>
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

function getQuizTypeBgColor(index) {
  const index1 = [
    1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52,
  ];
  const index2 = [
    2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53,
  ];
  // const index3 = [
  //   3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54,
  // ];

  if (index1.includes(index + 1)) {
    return "#FFD0D0";
  } else if (index2.includes(index + 1)) {
    return "#FF9EAA";
  } else {
    return "#C1ECE4";
  }
}

//
