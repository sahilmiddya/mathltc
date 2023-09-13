import "./basic.css";

function BasicKeypad({ onButtonClick }) {
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "/", "0", "."];

  return (
    <div className="keypad">
      {buttons.map((button, index) => (
        <button
          className="keys"
          key={index}
          onClick={() => onButtonClick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
}

export default BasicKeypad;
