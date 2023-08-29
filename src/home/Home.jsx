import { useEffect } from "react";

// import "./home.css";
import Navbar from "./navbar/Navbar";
import Card from "./cards/Card";
import { useDispatch, useSelector } from "react-redux";
import { getQuizTypesAsync } from "../store/quizes/quizAction";
import {
  globalsettingasync,
  profiledetailsasync,
} from "../store/ProfileActions";

const Home = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const quiz = useSelector((state) => state.quiz);

  console.log({ auth });

  console.log({ quiz });

  useEffect(() => {
    dispatch(getQuizTypesAsync(auth?.user?.token));
    dispatch(
      profiledetailsasync(
        auth?.user?.token,
        auth?.user?.displayName,
        () => {},
        () => {}
      )
    );

    dispatch(
      globalsettingasync(
        auth?.user?.token,
        auth?.user?.displayName,
        () => {},
        () => {}
      )
    );
  }, []);

  return (
    <div className="homez">
      <Navbar />
      <Card />
    </div>
  );
};

export default Home;
