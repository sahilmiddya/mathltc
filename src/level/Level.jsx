// import React from "react";
import Navbar from "../home/navbar/Navbar";

import "./level.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { quizFormat, selectQuizLevel } from "../store/quizes/quizSlice";
import { getQuestionsAsync } from "../store/quizes/quizAction";
const Level = () => {
  const quizLevel = useSelector((state) => state.quiz.quizLevel);
  const selectedQuizType = useSelector((state) => state.quiz.selectedQuizType);

  const auth = useSelector((state) => state.auth);
  console.log(quizLevel);
  let nav = useNavigate();
  let dispatch = useDispatch();

  const goto = (slug, quizlevel, quizFormat) => {
    // dispatch(getQuizLevelAsync(auth?.user?.token, slug));
    dispatch(
      getQuestionsAsync(
        auth.user.token,
        selectedQuizType.slug,
        quizFormat,
        quizlevel.title
      )
    );
    // dispatch(selectQuizLevel(quizlevel));
    nav("/math");
  };
  return (
    <div>
      <Navbar />
      <div className="levelcont">
        {quizLevel?.map?.((e) => (
          <>
            <div
              className="level"
              onClick={() => {
                goto(e.title, e, e.quiz_format.slug);
              }}
            >
              <div className="ltitle">{e?.title}</div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Level;
