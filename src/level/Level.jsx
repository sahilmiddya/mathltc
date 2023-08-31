// import React from "react";
import Navbar from "../home/navbar/Navbar";

import "./level.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectQuizLevel } from "../store/quizes/quizSlice";
import { getQuestionsAsync } from "../store/quizes/quizAction";

const Level = () => {
  const quizLevel = useSelector((state) => state.quiz.quizLevel);
  const selectedQuizType = useSelector((state) => state.quiz.selectedQuizType);

  const auth = useSelector((state) => state.auth);
  let nav = useNavigate();
  let dispatch = useDispatch();

  const goto = (slug, quizlevel, quizFormat) => {
    // dispatch(getQuizLevelAsync(auth?.user?.token, slug));
    dispatch(selectQuizLevel(quizlevel));

    dispatch(
      getQuestionsAsync(
        auth.user.token,
        selectedQuizType.slug,
        quizFormat,
        quizlevel.title,
        () => {
          nav("/math");
        }
      )
    );
  };
  return (
    <div>
      <Navbar />
      <div className="lbody">
        <h1>Select Level</h1>
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
    </div>
  );
};

export default Level;
