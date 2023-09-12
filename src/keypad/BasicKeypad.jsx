import "./basic.css";

function BasicKeypad({ onButtonClick }) {
  return (
    <div className="keypad">
      <button className="keys" onClick={() => onButtonClick("1")}>
        1
      </button>{" "}
      <button className="keys" onClick={() => onButtonClick("4")}>
        4
      </button>
      <button className="keys" onClick={() => onButtonClick("7")}>
        7
      </button>
      <button className="keys" onClick={() => onButtonClick(".")}>
        .
      </button>
      <button className="keys" onClick={() => onButtonClick("2")}>
        2
      </button>
      <button className="keys" onClick={() => onButtonClick("5")}>
        5
      </button>
      <button className="keys" onClick={() => onButtonClick("8")}>
        8
      </button>
      <button className="keys" onClick={() => onButtonClick("0")}>
        0
      </button>
      <button className="keys" onClick={() => onButtonClick("3")}>
        3
      </button>
      <button className="keys" onClick={() => onButtonClick("6")}>
        6
      </button>
      <button className="keys" onClick={() => onButtonClick("9")}>
        9
      </button>
      <button className="keys" onClick={() => onButtonClick("/")}>
        /
      </button>
    </div>
  );
}

export default BasicKeypad;
