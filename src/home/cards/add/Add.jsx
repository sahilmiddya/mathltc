import React from "react";

import "./add.css";
import Navbar from "../../navbar/Navbar";
import { Link } from "react-router-dom";
const Add = () => {
  return (
    <>
      <Navbar />
      <div className="add">
        <h2>Addition</h2>
        <div className="cards">
          <div className="r1 addr">
            <Link to='/level'>Integers</Link>
          </div>
          <div className="r2 addr">Decimals</div>
          <div className="r3 addr">Fractions</div>
        </div>
      </div>
    </>
  );
};

export default Add;
