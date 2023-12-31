import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./avatr.css";
import {
  setData,
  setShowAnimals,
  setShowHumans,
  setSelectedImage,
  setbackgroundImage,
} from "../../store/avatarSlice"; // Update the path to your avatarSlice

// import "./avatar.css";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../constants/baseURL";
import { setstate } from "../../store/regFlowslice";
import {
  profiledetailsasync,
  updateProfilePicasync,
} from "../../store/ProfileActions";

import { setWardrobeModalOpen } from "../../store/ProfileSlice";

function Avatar2() {
  const [showbg, setshowbg] = useState(false);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const avatar = useSelector((state) => state.regnflow.avatar);
  const nav = useNavigate();

  const [backgroundURL, setBackgroundURL] = useState("");
  const [selected_btn, setselected_btn] = useState(0);

  const {
    // data,
    loading,
    animalList,
    humanList,
    showAnimals,
    // showHumans,
    selectedImage,
    backgroundImage,
  } = useSelector((state) => state.avatar);

  useEffect(() => {
    const apiUrl = `${baseURL}/accounts/avatar/list`;

    axios
      .get(apiUrl)
      .then((response) => {
        dispatch(setData(response.data));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [dispatch]);

  const handleShowAnimals = () => {
    setshowbg(false);
    dispatch(setShowAnimals());
    setselected_btn(0);
  };

  const handleShowHumans = () => {
    setshowbg(false);
    dispatch(setShowHumans());
    setselected_btn(1);
  };

  const handleImageClick = (imageSrc, avatar) => {
    dispatch(setSelectedImage(imageSrc));
    dispatch(setstate({ avatar: avatar?.id, avatarURL: imageSrc }));
  };

  const nxtmodal = () => {
    // nav("/bgav");
    dispatch(
      updateProfilePicasync(
        auth?.user?.token,
        auth?.user?.displayName,
        {
          avatar,
          background: backgroundImage?.id,

          has_background: true,
          background_solid_color: "",
        }, //bodydata
        () => {
          dispatch(setWardrobeModalOpen());

          dispatch(
            profiledetailsasync(
              auth?.user?.token,
              auth?.user?.displayName,
              () => {},
              () => {}
            )
          );
        },
        () => {}
      )
    );
  };
  const backbtn = () => {
    nav(-1);
  };
  const handleShowBG = () => {
    setshowbg(true);
    setselected_btn(2);
  };

  return (
    <div className="Avatar" style={{ maxHeight: "90vh", overflowY: "auto" }}>
      <div className="nxtbtn">
        <button className="nxt" onClick={backbtn}>
          Back
        </button>
        <button className="nxt" onClick={nxtmodal}>
          Close
        </button>
      </div>
      {/* {selectedImage && ( */}
      <div className="selimage_wr">
        <h2 className="h2_wr">Selected Image:</h2>
        <div
          className="bgimg"
          style={{
            backgroundImage: `url(${backgroundURL})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "100% 100% 100% 100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 120,
            width: 120,
            borderRadius: "50%",
          }}
        >
          <img
            src={selectedImage}
            className="selimage2"
            style={{
              height: "70%",
            }}
            // alt="Selected"
          />
        </div>
      </div>
      <div className="btnav">
        <button
          className="btnavtr_wr"
          onClick={handleShowAnimals}
          style={{
            backgroundColor: selected_btn === 0 ? "#3aa6b9" : "transparent",
            color: selected_btn === 0 ? "#C1ECE4" : "#3AA6B9",
          }}
        >
          Animal
        </button>
        <button
          className="btnavtr_wr"
          onClick={handleShowHumans}
          style={{
            backgroundColor: selected_btn === 1 ? "#3aa6b9" : "transparent",
            color: selected_btn === 1 ? "#C1ECE4" : "#3AA6B9",
          }}
        >
          Human
        </button>
        <button
          className="btnavtr_wr"
          onClick={handleShowBG}
          style={{
            backgroundColor: selected_btn === 2 ? "#3aa6b9" : "transparent",
            color: selected_btn === 2 ? "#C1ECE4" : "#3AA6B9",
          }}
        >
          Background
        </button>
      </div>
      <div className="avatar-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {!showbg && (
              <ul className="filter">
                {(showAnimals ? animalList : humanList).map((item) => (
                  <div
                    key={item.id}
                    className="avatar-item"
                    onClick={() => handleImageClick(item.image, item)}
                  >
                    <img
                      src={item.image}
                      className="img_animals"
                      alt={item.name}
                    />
                  </div>
                ))}
              </ul>
            )}
            {showbg && <BgAvatar setBackgroundURL={setBackgroundURL} />}
          </>
        )}
      </div>
    </div>
  );
}

export default Avatar2;

export const BgAvatar = ({ setBackgroundURL }) => {
  const dispatch = useDispatch();
  // const { data, loading, selectedImage } = useSelector((state) => state.avatar);

  const [background, setBackground] = useState([]);

  useEffect(() => {
    const bgapiUrl = `${baseURL}/accounts/background/list`;
    //
    axios
      .get(bgapiUrl)
      .then((response) => {
        setBackground(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleImageClick = (imageURL, background) => {
    setBackgroundURL(imageURL);
    dispatch(setbackgroundImage(background));
  };

  return (
    <div>
      <>
        <ul
          className="filter"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
          }}
        >
          {background?.map(
            (
              item // Use 'data' directly instead of 'showAnimals' or 'showHumans'
            ) => (
              <div
                key={item.id}
                className="avatar-item_bg"
                onClick={() => handleImageClick(item.image, item)}
              >
                <img src={item.image} className="img_bg_wr" alt={item.name} />
              </div>
            )
          )}
        </ul>
      </>
    </div>
  );
};
