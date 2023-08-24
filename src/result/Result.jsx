import "./result.css";

const Result = () => {
  return (
    <div className="rescont">
      <div className="resleft">left</div>
      <div className="resright">
        <div className="rightup">
          <div className="b1">
            <div className="b1child">
              30
              <br />
              XP{" "}
            </div>
          </div>
          <div className="b2">
            <div className="b2child">
              90%
              <br />
              Accuracy
            </div>
          </div>
          <div className="b3">
            <div className="b3child">
              3
              <br />
              <span className="speed">Speed</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="others">
          <div className="othleft">
            <div className="ol1">Review answers</div>
            <div className="ol2">Feedback</div>
          </div>
          {/* <div className="othleft">left</div> */}
          <div className="othright">
            <div className="or1">Play Again</div>
            <div className="or2">Bonus</div>
          </div>
          {/* <div className="othright">right</div> */}
        </div>
      </div>
      <div className="resx">x</div>
    </div>
  );
};

export default Result;
