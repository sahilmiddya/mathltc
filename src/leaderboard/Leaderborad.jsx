import { useEffect } from "react";
import Navbar from "../home/navbar/Navbar";
import "./leader.css";
import { leader_Async } from "../store/leaderaction";
import { useDispatch, useSelector } from "react-redux";

const Leaderboard = () => {
  const dispatch = useDispatch();
  const leaderboard_data = useSelector(
    (state) => state.leaderboard?.leaderboard_data?.leaderboard
  );
  // console.log(leaderboard_data.id);
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(
      leader_Async(
        auth.user.token,
        // auth.user.displayName,
        () => {},
        () => {}
      )
    );
  }, []);

  return (
    <div>
      <Navbar />
      <div className="lb_body">
        <div className="lb_heading">Leaderboard</div>
        {/* <hr /> */}
        <div className="lb_table">
          <div className="lb_table_body">
            {Array.isArray(leaderboard_data) &&
              leaderboard_data.map((item, index) => (
                <div
                  key={item.id}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="col_left">
                    <div className="cols col1">{index + 1}</div>
                    <div className="cols col1" style={{ minWidth: 150 }}>
                      {" "}
                      {item.user.username}
                    </div>
                    <div className="cols col1"> fvgfv</div>
                  </div>
                  <div className="col_right">
                    <div className="cols col1"> {item.animal_status}</div>
                    <div className="cols col1"> {item.total_points}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
