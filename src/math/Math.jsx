import { useEffect, useState } from "react";
import Navbar from "../home/navbar/Navbar";

import "./math.css";
import { useDispatch, useSelector } from "react-redux";
import { setcount } from "../store/quizes/quizSlice";
import { setcorrect, setwrong } from "../store/userAnswerslice";

const Math = () => {
  const count = useSelector((state) => state.quiz.count);
  const dispatch = useDispatch();

  const [remainingTime, setRemainingTime] = useState(60); // Timer set to 10 seconds

  const [inputcolor, setcolor] = useState("");
  const quizQuestions = useSelector((state) => state.quiz.quizQuestions);

  const questionAnswerList = quizQuestions?.question_answer_list;
  console.log(questionAnswerList);

  const answer = questionAnswerList?.[count]?.answer; //from api
  console.log(count);

  const [userInput, setUserInput] = useState("");

  const userans = useSelector((state) => state.userans);
  console.log(userans);

  const handleButtonClick = (value) => {
    setUserInput((prev) => prev + value);
  };
  const clearExpression = () => {
    setUserInput("");
  };
  const checkAnswer = () => {
    const userNumber = parseInt(userInput);
    if (userNumber === answer) {
      setcolor("green");
      dispatch(setcorrect());
    } else {
      setcolor("red");
      dispatch(setwrong());
    }

    let timeout;

    timeout = setTimeout(() => {
      setcolor("");
      setUserInput("");

      if (count < 29) {
        dispatch(setcount(count + 1));
      } else {
        dispatch(setcount(0));
      }

      clearTimeout(timeout);
    }, 600);
  };
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  useEffect(() => {
    let timerInterval;

    if (remainingTime === 0) {
      callApi();
      // clearInterval(timerInterval); // Stop the timer interval when remainingTime reaches 0
    }

    timerInterval = setInterval(() => {
      setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [remainingTime]);

  const callApi = async () => {
    try {
      console.log("hfgdsfbjh");
      const response = await fetch("YOUR_API_URL_HERE");
      const data = await response.json();
      console.log("API Response:", data);
    } catch (error) {
      console.error("Error calling API:", error);
    }
  };

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
                type="number"
                value={userInput}
                onChange={handleInputChange}
                style={{ color: inputcolor, padding: "5px" }}
              />
            </span>
          </div>

          <div className="btnbox">
            <div className="buttonrow">
              <button
                className="buttons btn1"
                onClick={() => handleButtonClick("1")}
              >
                1
              </button>
              <button
                className="buttons btn1"
                onClick={() => handleButtonClick("2")}
              >
                2
              </button>
              <button
                className="buttons btn1"
                onClick={() => handleButtonClick("3")}
              >
                3
              </button>
            </div>
            <div className="buttonrow">
              <button
                className="buttons btn1"
                onClick={() => handleButtonClick("4")}
              >
                4
              </button>
              <button
                className="buttons btn1 btn5"
                onClick={() => handleButtonClick("5")}
              >
                5
              </button>
              <button
                className="buttons btn1"
                onClick={() => handleButtonClick("6")}
              >
                6
              </button>
            </div>
            <div className="buttonrow">
              <button
                className="buttons btn1"
                onClick={() => handleButtonClick("7")}
              >
                7
              </button>
              <button
                className="buttons btn1"
                onClick={() => handleButtonClick("8")}
              >
                8
              </button>
              <button
                className="buttons btn1"
                onClick={() => handleButtonClick("9")}
              >
                9
              </button>
            </div>
            <div className="buttonrow">
            <button
                className="buttons btn1"
                onClick={() => handleButtonClick("")}
              >
                .
              </button>
              <button
                className="buttons btn1"
                onClick={() => handleButtonClick("0")}
              >
                0
              </button>
              <button
                className="buttons btn1"
                onClick={() => handleButtonClick("")}
              >
                .
              </button>
            </div>
          </div>
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
