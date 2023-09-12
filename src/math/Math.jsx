import { useEffect, useState } from "react";
import Navbar from "../home/navbar/Navbar";

import "./math.css";
import { useDispatch, useSelector } from "react-redux";
import { setcount } from "../store/quizes/quizSlice";
import { setcorrect, setwrong } from "../store/userAnswerslice";
import { useNavigate } from "react-router-dom";
import {
  getQuestionsAsync,
  updateUserstatsAsync,
} from "../store/quizes/quizAction";
import BasicKeypad from "../keypad/BasicKeypad";

const Math = () => {
  const auth = useSelector((state) => state.auth);
  const selectQuizLevel = useSelector((state) => state.quiz.selectQuizLevel);
  const quiz = useSelector((state) => state.quiz);
  const attempans = useSelector((state) => state.userans);
  const count = useSelector((state) => state.quiz.count);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [rightans, setrightans] = useState(null);

  const [remainingTime, setRemainingTime] = useState(740); // Timer set to 10 seconds

  const [inputcolor, setcolor] = useState("");
  const quizQuestions = useSelector((state) => state.quiz.quizQuestions);

  const questionAnswerList = quizQuestions?.question_answer_list;
  //
  const answer = questionAnswerList?.[count]?.answer; //from api

  const [userInput, setUserInput] = useState("");

  // const userans = useSelector((state) => state.userans);

  const handleButtonClick = (value) => {
    // if (value === '=') {
    //   try {
    //     const result = eval(userInput);
    //     setUserInput(result.toString());
    //   } catch (error) {
    //     setUserInput('Error');
    //   }
    // } else if (value === 'C') {
    //   setUserInput('');
    // } else {
      setUserInput((prevValue) => prevValue + value);
    // }
  };

  const clearExpression = () => {
    setUserInput("");
  };

  console.log({ quiz, count });

  const checkAnswer = () => {
    if (userInput === "") {
      if (count === quiz.quizQuestions?.question_answer_list?.length - 5) {
        dispatch(
          getQuestionsAsync(
            auth?.user?.token,
            quiz?.selectQuizLevel?.quiz_type?.slug,
            quiz?.selectQuizLevel?.quiz_format?.slug,
            quiz?.selectQuizLevel?.title,
            () => {
              return dispatch(setcount(count + 1));
            }
          )
        );
      } else {
        return dispatch(setcount(count + 1));
      }
    }

    const userNumber = parseInt(userInput);

    if (userNumber === answer) {
      setcolor("green");
      dispatch(setcorrect());
    } else {
      setcolor("red");
      dispatch(setwrong());
      setrightans(answer);
    }

    if (count === quiz.quizQuestions?.question_answer_list?.length - 5) {
      dispatch(
        getQuestionsAsync(
          auth?.user?.token,
          quiz?.selectQuizLevel?.quiz_type?.slug,
          quiz?.selectQuizLevel?.quiz_format?.slug,
          quiz?.selectQuizLevel?.title,
          () => {
            return dispatch(setcount(count + 1));
          }
        )
      );
    }

    let timeout;

    timeout = setTimeout(() => {
      setcolor("");
      setUserInput("");

      if (count >= 29) {
        dispatch(setcount(0));
      } else {
        dispatch(setcount(count + 1));
      }

      setrightans(null);
      clearTimeout(timeout);
    }, 600);
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  useEffect(() => {
    let timerInterval;

    timerInterval = setInterval(() => {
      setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [remainingTime]);

  useEffect(() => {
    if (remainingTime === 0) {
      dispatch(
        updateUserstatsAsync(
          auth.user.token,
          auth.user.displayName,

          {
            user: auth.user?.id,
            total_ques_attempted: attempans?.correct + attempans?.wrong,
            total_correct_ans: attempans?.correct,
            total_wrong_ans: attempans?.wrong,
            total_points:
              selectQuizLevel?.point_per_question * attempans?.correct,
            animal_status: "beginner",
            total_seconds_played: "60",
          },
          () => {
            nav("/result");
          }
        )
      );
      // clearInterval(timerInterval); // Stop the timer interval when remainingTime reaches 0
    }
  }, [remainingTime]);

  return (
    <div>
      <Navbar />
      <div className="containermath">
        <div className="toppart">
          <p>icons</p>
          <p> {remainingTime} seconds</p>
        </div>
        <div className="mathbody">
          <div className="mtop">
            {questionAnswerList?.[count]?.question_list?.[0]?.question} =
            <span>
              <input
                className="inpmath"
                type="number"
                value={rightans || userInput}
                onChange={handleInputChange}
                style={{ color: inputcolor, padding: "5px" }}
              />
            </span>
          </div>
          <BasicKeypad onButtonClick={handleButtonClick} />
          <div className="bottompart">
            <button className="back btnm" onClick={clearExpression}>
              C
            </button>
            <button className="check btnm" onClick={checkAnswer}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Math;

// if (count === quiz?.quizQuestions?.question_answer_list?.length - 5) {
//   dispatch(
//     getQuestionsAsync(
//       auth.user.token,
//       quiz?.selectQuizLevel?.quiz_type?.slug,
//       quiz?.selectQuizLevel?.quiz_format?.slug,
//       quiz?.selectQuizLevel?.title
//     )
//   );
//   console.log("-----------------------------------");
// }
