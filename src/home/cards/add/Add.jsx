// import React from "react";

import "./add.css";
import Navbar from "../../navbar/Navbar";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Add = () => {
  const quiz = useSelector((state) => state.quiz);
  const quizFormat = Array.isArray(quiz?.quizFormat) && quiz?.quizFormat;

  console.log({ quizFormat, quiz });
  return (
    <>
      <Navbar />
      {quizFormat?.map?.((e) => (
        <div>{e.title}</div>
      ))}
      {/*  <div className="add">
   <h2>Addition</h2>
        <div className="cards">
          <div className="r1 addr">
            <Link to='/level'>Integers</Link>
          </div>
          <div className="r2 addr">Decimals</div>
          <div className="r3 addr">Fractions</div>
        </div>
      </div> */}
    </>
  );
};

export default Add;
