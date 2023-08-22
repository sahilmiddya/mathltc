import { useEffect } from "react";

// import "./home.css";
import Navbar from "./navbar/Navbar";
import Card from "./cards/Card";
import { useDispatch, useSelector } from "react-redux";
import { getQuizTypesAsync } from "../store/quizes/quizAction";

const Home = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const quiz = useSelector((state) => state.quiz);

  console.log({ auth });

  console.log({ quiz });

  useEffect(() => {
    dispatch(getQuizTypesAsync(auth?.user?.token));
  }, []);

  return (
    <div className="homez">
      <Navbar />
      <Card />
    </div>
  );
};

export default Home;
