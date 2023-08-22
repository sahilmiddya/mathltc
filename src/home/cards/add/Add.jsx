// import React from "react";

import "./add.css";
import Navbar from "../../navbar/Navbar";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getQuizLevelAsync } from "../../../store/quizes/quizAction";
const Add = () => {
  const nav = useNavigate();
  const disp = useDispatch();
  const quiz = useSelector((state) => state.quiz);
  const auth = useSelector((state) => state.auth);
  const selectedquiztype=useSelector((state) => state.quiz.selectedQuizType)
console.log(selectedquiztype);
  const quizFormat = Array.isArray(quiz?.quizFormat) && quiz?.quizFormat;

  console.log({ quizFormat, quiz });
  const goto = (id) => {
    disp(getQuizLevelAsync(auth?.user?.token,selectedquiztype.slug,id)); //from browser
    nav("/level");
  };
  // log
  return (
    <>
      <Navbar />
      {quizFormat?.map?.((e) => (
        <div
          className="cards"
          key={e.id}
          onClick={() => {
            goto(e.slug, e);
          }}
        >
          <div className="addr r1">{e.title}</div>
        </div>
      ))}
    </>
  );
};

export default Add;
