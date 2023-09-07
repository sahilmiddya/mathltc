import { useEffect } from "react";
import Navbar from "../home/navbar/Navbar";
import "./leader.css";
import { leader_Async } from "../store/leaderaction";
import { useDispatch, useSelector } from "react-redux";
import { baseURL } from "../constants/baseURL";

const Leaderboard = () => {
  const dispatch = useDispatch();
  const leaderboard_data = useSelector(
    (state) => state.leaderboard?.leaderboard_data?.leaderboard
  );
  const loggedIn_user = useSelector(
    (state) => state.leaderboard?.leaderboard_data?.loggedIn_user
  );
  // console.log(leaderboard_data.id);
  // const user_avatar = useSelector(
  //   (state) => state.userdetails.user.avatar.image
  // );
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
            {/* =[=====================================================] */}
            <div
              className="lb_row"
              style={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor:"#ffd0d0" 
                  // auth.user.displayName === item.user.username ? : "",
              }}
            >
              <div className="col_left">
                <div className="cols col1">{loggedIn_user.rank}</div>
                <div
                  className="cols col1"
                  style={{
                    backgroundImage: `url(${
                      baseURL + loggedIn_user?.user?.background?.image
                    })`,
                    width: "40px",
                    padding: "2px",
                    height: "40px",
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
                <div className="cols col1" style={{ minWidth: 150 ,color:"#555"}}>
                  {loggedIn_user.user.username} (you)
                </div>
              </div>
              <div className="col_right">
                <div className="cols col1"> {loggedIn_user.userStats.animal_status}</div>
                <div className="cols col1"> {loggedIn_user.userStats.total_points}</div>
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
                    backgroundColor:
                      auth.user.displayName === item.user.username
                        ? "#ffe9e9"
                        : "",
                  }}
                >
                  <div className="col_left">
                    <div className="cols col1">{index + 1}</div>
                    <div
                      className="cols col1"
                      style={{
                        backgroundImage: `url(${
                          baseURL + item?.user?.background?.image
                        })`,
                        width: "40px",
                        padding: "2px",
                        height: "40px",
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
