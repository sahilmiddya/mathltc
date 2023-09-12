import { useState } from "react";

 
const BasicKeypad = () => {

  const [userInput, setUserInput] = useState("");

  const handleButtonClick = (value) => {
    setUserInput((prev) => prev + value);
  };
  return (
    <div>
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
                onClick={() => handleButtonClick(".")}
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
                onClick={() => handleButtonClick(".")}
              >
                .
              </button>
            </div>
          </div>
    </div>
  )
}

export default BasicKeypad