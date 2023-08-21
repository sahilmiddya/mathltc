import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./card.css";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link, useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const Card = () => {
  const nav = useNavigate();
  const prev = () => {
    // alert("nhbgvfcd");
    nav(-1);
  };
  return (
    <div className="card">
      <div className="cardcontent">
        <div className="r1">
          <Link to="/add" className="a">
            <AddIcon />
            <span>Addition</span>
          </Link>
        </div>
        <div className="r1">
          <AddIcon />
          BIDMAS
        </div>
        <div className="r1">
          <AddIcon />
          Averages
        </div>
        <div className="r1">
          <AddIcon />
          Percentages
        </div>
        <div className="r1">
          <AddIcon />
          Ratios
        </div>
        {/* ================  <AddIcon/>==== */}
        <div className="r2">
          <AddIcon />
          Subtraction
        </div>
        <div className="r2">
          <AddIcon />
          Number Machines
        </div>
        <div className="r2">
          <AddIcon />
          Prime Numbers3
        </div>
        <div className="r2">
          <AddIcon />
          Fractions
        </div>
        <div className="r2">
          <AddIcon />
          Unit conversions
        </div>
        {/* ================  <AddIcon/>======= */}
        <div className="r3">
          <AddIcon />
          Multiplication
        </div>
        <div className="r3">
          <AddIcon />
          Roman Numerals
        </div>
        <div className="r3">
          <AddIcon />
          Remainder
        </div>
        <div className="r3">
          <AddIcon />
          Mean, Median, Mode, Range
        </div>
        <div className="r3">
          <AddIcon />5
        </div>
        {/* ================  <AddIcon/> */}
        <div className="r1">
          <AddIcon />
          Division
        </div>
        <div className="r1">
          <AddIcon />
          Comparing numbers
        </div>
        <div className="r1">
          <AddIcon />
          Time Measurement
        </div>
        <div className="r1">
          <AddIcon />
          Conversions
        </div>
        <div className="r1">
          <AddIcon />
          Time conversions
        </div>
        {/* ================  <AddIcon/>==== */}
        <div className="r2">
          <AddIcon />
          Algebra
        </div>
        <div className="r2">
          <AddIcon />
          Angles
        </div>
        <div className="r2">
          <AddIcon />
          LCM/HCF
        </div>
        <div className="r2">
          <AddIcon />
          Rounding Off
        </div>
        <div className="r2">
          <AddIcon />
          Discounts
        </div>
        {/* ================  <AddIcon/>======= */}
        <div className="r3">
          <AddIcon />
          Words to Numbers
        </div>
        <div className="r3">
          <AddIcon />
          Indices
        </div>
        <div className="r3">
          <AddIcon />
          Simplifying Fractions
        </div>
        <div className="r3">
          <AddIcon />
          Speed, Distance, Time
        </div>
        <div className="r3">
          <AddIcon />
          Profit & Loss
        </div>
        {/* ================ */}
      </div>
      <div className="cardbtm">
        <span onClick={prev} className="span">
          <ArrowBackIosIcon />
          PREV
        </span>
        <MoreHorizIcon />
        <span className="span">
          NEXT
          <ArrowForwardIosIcon />
        </span>
      </div>
    </div>
  );
};

export default Card;
