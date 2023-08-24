// import React from "react";

import "./add.css";
import Navbar from "../../navbar/Navbar";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {rev} from '../../../utils/reverseArrayAsc'
import { getQuizLevelAsync } from "../../../store/quizes/quizAction";
const Add = () => {
  const nav = useNavigate();
  const disp = useDispatch();
  const quiz = useSelector((state) => state.quiz);
  const auth = useSelector((state) => state.auth);
  const selectedquiztype = useSelector((state) => state.quiz.selectedQuizType);
  console.log(selectedquiztype);
  const quizFormat = Array.isArray(quiz?.quizFormat) && quiz?.quizFormat;
  // const rev = quizFormat.reverse();
  console.log({ quizFormat, quiz });
  const goto = (id) => {
    disp(getQuizLevelAsync(auth?.user?.token, selectedquiztype.slug, id)); //from browser
    nav("/level");
  };
  // log
  return (
    <>
      <Navbar />
      <div className="add">
        <h1>{selectedquiztype.title}</h1>
        {rev(quizFormat)?.map?.((e, index) => (
          <div
            className="cards"
            key={e.id}
            onClick={() => {
              goto(e.slug, e);
            }}
          >
            <div
              className="addr r1"
              style={{
                backgroundColor: getQuizTypeBgColor(index),
              }}
            >
              {e.title}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Add;

function getQuizTypeBgColor(index) {
  const index1 = [1];
  const index2 = [2];
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
