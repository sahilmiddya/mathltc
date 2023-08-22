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
<<<<<<< HEAD
    console.log("inside useeffect");
    dispatch(getQuizTypesAsync(auth?.user?.token));
   }, []);
  
=======
    dispatch(getQuizTypesAsync(auth?.user?.token));
  }, []);

>>>>>>> 27e5a2c62ae2f7e6b193b0512b4a6ec0e10c1978
  return (
    <div className="homez">
      <Navbar />
      <Card />
    </div>
  );
};

export default Home;
