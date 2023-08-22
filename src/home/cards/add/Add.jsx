// import React from "react";

import "./add.css";
import Navbar from "../../navbar/Navbar";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getQuizFormatAsync } from "../../../store/quizes/quizAction";
const Add = () => {
  const nav = useNavigate();
  const disp = useDispatch();
  const quiz = useSelector((state) => state.quiz);
  const selectedQuizType = useSelector((state) => state.quiz.selectedQuizType);

  const quizFormat = Array.isArray(quiz?.quizFormat) && quiz?.quizFormat;

  console.log({ selectedQuizType });
  const goto = (e) => {
    disp(getQuizFormatAsync(e));
    nav("/level");
  };
  return (
    <>
      <Navbar />
      {quizFormat?.map?.((e) => (
        <div className="cards" key={e.id} onClick={goto}>
          <div className="addr r1">{e.title}</div>
        </div>
      ))}
      {/*  <div className="add">
          <h2>Addition</h2>
        <div className="cards">
          <div className="r1 addr">
            <Link to='/level'>Integers</Link>
          </div>
          <div className="r2 addr">Decimals</div>
          <div className="r3 addr">Fractions</div>
        </div>
      </div> */}
    </>
  );
};

export default Add;
