// import React from 'react';

function BasicKeypad({ onButtonClick }) {
  return (
    <div className="keypad">
      <button onClick={() => onButtonClick('1')}>1</button>
      <button onClick={() => onButtonClick('2')}>2</button>
      <button onClick={() => onButtonClick('3')}>3</button>
      <button onClick={() => onButtonClick('+')}>+</button>
      <br></br>
      <button onClick={() => onButtonClick('4')}>4</button>
      <button onClick={() => onButtonClick('5')}>5</button>
      <button onClick={() => onButtonClick('6')}>6</button>
      <button onClick={() => onButtonClick('-')}>-</button> <br></br>
      <button onClick={() => onButtonClick('7')}>7</button>
      <button onClick={() => onButtonClick('8')}>8</button>
      <button onClick={() => onButtonClick('9')}>9</button>
      <button onClick={() => onButtonClick('*')}>*</button> <br></br>
      <button onClick={() => onButtonClick('C')}>C</button>
      <button onClick={() => onButtonClick('0')}>0</button>
      <button onClick={() => onButtonClick('=')}>=</button>
      <button onClick={() => onButtonClick('/')}>/</button>
    </div>
  );
}

export default BasicKeypad;
