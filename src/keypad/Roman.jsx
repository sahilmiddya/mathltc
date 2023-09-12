import "./basic.css"; 

function Roman({ onButtonClick }) {
  const buttons = [ 'I','V','X','L','C','D',' ', 'M',''];

  return (
    <div className="keypad">
      {buttons.map((button, index) => (
        <button  className="keys" key={index} onClick={() => onButtonClick(button)}>
          {button}
        </button>
      ))}
    </div>
  );
}

export default Roman; 