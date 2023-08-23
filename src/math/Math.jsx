import { useState } from "react";
import Navbar from "../home/navbar/Navbar";

import "./math.css";
import { useDispatch, useSelector } from "react-redux";
import { setcount } from "../store/quizes/quizSlice";

const Math = () => { 
  const count = useSelector((state) => state.quiz.count);
  const dispatch = useDispatch();
  const quizQuestions = useSelector((state) => state.quiz.quizQuestions); 

  const questionAnswerList = quizQuestions?.question_answer_list;
  console.log(questionAnswerList);
  const answer= questionAnswerList?.[count].answer //from api
  console.log(answer);

  const [expression, setExpression] = useState("");
  // const [result, setResult] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };
  const clearExpression = () => {
    setExpression("");
  };
  const calculateResult = () => {
    dispatch(setcount());
  };
  return (
    <div>
      <Navbar />
      <div className="containermath">
        <div className="mathbody">
          <div className="mtop">
            {questionAnswerList?.[count]?.question_list?.[0]?.question} =
            <span>
              <input
                type="number"
                placeholder="Enter an expression"
                value={expression}
                // value={answer}
                readOnly
              />
            </span>
          </div>
          <div className="numbers">
            <div className="btnbox">
              <div className="buttonrow">
                <button
                  className="buttons"
                  onClick={() => handleButtonClick("1")}
                >
                  1
                </button>
                <button
                  className="buttons"
                  onClick={() => handleButtonClick("2")}
                >
                  2
                </button>
                <button
                  className="buttons"
                  onClick={() => handleButtonClick("3")}
                >
                  3
                </button>
                {/* <button className='buttons' onClick={() => handleButtonClick('+')}>+</button> */}
              </div>
              <div className="buttonrow">
                <button
                  className="buttons"
                  onClick={() => handleButtonClick("4")}
                >
                  4
                </button>
                <button
                  className="buttons"
                  onClick={() => handleButtonClick("5")}
                >
                  5
                </button>
                <button
                  className="buttons"
                  onClick={() => handleButtonClick("6")}
                >
                  6
                </button>
                {/* <button className='buttons' onClick={() => handleButtonClick('-')}>-</button> */}
              </div>
              <div className="buttonrow">
                <button
                  className="buttons"
                  onClick={() => handleButtonClick("7")}
                >
                  7
                </button>
                <button
                  className="buttons"
                  onClick={() => handleButtonClick("8")}
                >
                  8
                </button>
                <button
                  className="buttons"
                  onClick={() => handleButtonClick("9")}
                >
                  9
                </button>
                {/* <button className='buttons' onClick={() => handleButtonClick('*')}>*</button> */}
              </div>
              <div className="buttonrow">
                {/* <button className='buttons' onClick={clearExpression}>C</button> */}
                <button
                  className="buttons"
                  onClick={() => handleButtonClick("0")}
                >
                  0
                </button>
                {/* <button className='buttons' onClick={() => handleButtonClick('/')}>/</button> */}
              </div>
            </div>
            {/* {loading && <p className={styles.loading}>Loading...</p>}
            {error && <p className={styles.error}>{error}</p>}
            {result !== null && <p className={styles.result}>Result: {result}</p>} */}
          </div>
        </div>
        <div className="mbtns">
          {" "}
          <button className="mback btnm" onClick={clearExpression}>
            C
          </button>
          <button className="mnext btnm" onClick={calculateResult}>
            =
          </button>
        </div>
      </div>
    </div>
    // </div >
  );
};

export default Math;