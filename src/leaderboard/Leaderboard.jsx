import { useEffect } from "react";
import Navbar from "../home/navbar/Navbar";
import "./leader.css";
import { leader_Async } from "../store/leaderaction";
import { useDispatch, useSelector } from "react-redux";
import { baseURL } from "../constants/baseURL";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

const Leaderboard = () => {
  const dispatch = useDispatch();
  const leaderboard_data = useSelector(
    (state) => state.leaderboard?.leaderboard_data?.leaderboard
  );
  const loggedIn_user = useSelector(
    (state) => state.leaderboard?.leaderboard_data?.loggedIn_user
  );

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
  });

  return (
    <div>
      <Navbar />
      <div className="lb_body">
        <div className="lb_heading">Leaderboard</div>

        <div className="lb_table">
          <div className="lb_table_body">
            {/* =[=====================================================] */}
            <div
              className="lb_row"
              style={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#ffd0d0",
                // auth.user.displayName === item.user.username ? : "",
              }}
            >
              <div className="col_left">
                <div className="cols col_1">{loggedIn_user.rank}</div>
                <div
                  className="cols col1"
                  style={{
                    backgroundImage: `url(${
                      baseURL + loggedIn_user?.user?.background?.image
                    })`,
                    width: "30px",
                    padding: "2px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    // style={{height:'80%',width:'60%'}}
                    src={baseURL + loggedIn_user?.user?.avatar?.image}
                    alt="gtfh"
                  />
                </div>
                <div
                  className="cols col1"
                  style={{ minWidth: 150, color: "#87454d" }}
                >
                  {loggedIn_user.user.username}{" "}
                  <span className="yo">(You)</span>
                </div>
              </div>
              <div className="col_right">
                <div className="cols col1" style={{ color: "#87454d" }}>
                  {loggedIn_user.userStats.animal_status.toLowerCase()}
                </div>
                <div className="cols col1" style={{ color: "#87454d" }}>
                  {loggedIn_user.userStats.total_points} XP
                </div>
              </div>
            </div>
            {/* =====================///////////////////////========================= */}
            {Array.isArray(leaderboard_data) &&
              leaderboard_data.map((item, index) => (
                <div
                  className="lb_row"
                  key={item.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color:
                      auth.user.displayName === item.user.username
                        ? "#87454d"
                        : "",
                    backgroundColor:
                      auth.user.displayName === item.user.username
                        ? "#fff2f2"
                        : "",
                  }}
                >
                  <div className="col_left">
                    {/* ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] */}
                    {/* <div className="cols col1">{index + 1}</div>{" "}
                    
                    
                    */}

                    {index + 1 <= 3 ? (
                      // Render an icon for ranks 1, 2, and 3
                      <div className="cols col_1" style={{ minWidth: 10 }}>
                        {
                          index + 1 === 1 && <MilitaryTechIcon />
                          // <img src="icon_1.png" alt="  1" />
                        }
                        {
                          index + 1 === 2 && <MilitaryTechIcon />
                          // <img src="icon_2.png" alt="  2" />
                        }
                        {
                          index + 1 === 3 && <MilitaryTechIcon />
                          // <img src="icon_3.png" alt="  3" />
                        }
                      </div>
                    ) : (
                      // Render the rank number for other ranks
                      <div className="cols col_1">{index + 1}</div>
                    )}
                    {/* //////////////////////////////////////////////////////////////////////////// */}
                    <div
                      className="cols col1"
                      style={{
                        backgroundImage: `url(${
                          baseURL + item?.user?.background?.image
                        })`,
                        width: "30px",
                        padding: "2px",
                        height: "30px",
                        borderRadius: "50%",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        // style={{height:'80%',width:'60%'}}
                        src={baseURL + item?.user?.avatar?.image}
                        alt="gtfh"
                      />
                    </div>
                    <div className="cols col1" style={{ minWidth: 150 }}>
                      {item.user.username}
                    </div>
                  </div>
                  <div className="col_right">
                    <div className="cols col1">
                      {" "}
                      {item.animal_status.toLowerCase()}
                    </div>
                    <div className="cols col1 "> {item.total_points} XP</div>
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
