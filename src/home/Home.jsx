import React, { useEffect } from "react";

// import "./home.css";
import Navbar from "./navbar/Navbar";
import Card from "./cards/Card";
import { useDispatch, useSelector } from "react-redux";
import { getQuizTypesAsync } from "../store/quizes/quizAction";

const Home = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const quiz = useSelector((state) => state.quiz);

  console.log({ quiz });

  useEffect(() => {
    if (!quiz?.quizTypes) {
      dispatch(getQuizTypesAsync(auth?.user?.token));
    }
  }, [!quiz?.quizTypes]);

  return (
    <div className="homez">
      <Navbar />
      <Card />
    </div>
  );
};

export default Home;
