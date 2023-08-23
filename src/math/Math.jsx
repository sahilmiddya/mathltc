import { useState } from "react";
import Navbar from "../home/navbar/Navbar";

import "./math.css";
import { useSelector } from "react-redux";
const Math = () => {
  const quizQuestions = useSelector((state) => state.quiz.quizQuestions);
  // const selectedQuizType = useSelector((state) => state.quiz.selectedQuizType);

console.log(quizQuestions);
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
  const calculateResult = () => {};
  return (
    <div>
      <Navbar />
      <div className="containermath">
        <div className="mathbody">
          <div className="mtop">
            5+8 =
            <span>
              <input
                type="number"
                placeholder="Enter an expression"
                value={expression}
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
