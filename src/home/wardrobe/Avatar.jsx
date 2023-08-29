import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./avatr.css";
import {
  setData,
  setShowAnimals,
  setShowHumans,
  setSelectedImage,
} from "../../store/avatarSlice"; // Update the path to your avatarSlice

// import "./avatar.css";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../constants/baseURL";
import { setstate } from "../../store/regFlowslice";
import Bgav from "../../avatar/Bgav";

function Avatar2() {
  const [showbg, setshowbg] = useState(false);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [background, setBackground] = useState("");

  const {
    // data,
    loading,
    animalList,
    humanList,
    showAnimals,
    // showHumans,
    selectedImage,
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

  useEffect(() => {
    const bgapiUrl = `${baseURL}/accounts/backgrounds/list`;
    // console.log(bgapiUrl +"gbgbgbngnb");
    //
    axios
      .get(bgapiUrl)
      .then((response) => {
        dispatch(setData(response.data));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [dispatch]);

  const handleShowAnimals = () => {
    dispatch(setShowAnimals());
  };

  const handleShowHumans = () => {
    dispatch(setShowHumans());
  };

  const handleImageClick = (imageSrc, avatar) => {
    dispatch(setSelectedImage(imageSrc));
    dispatch(setstate({ avatar: avatar?.id, avatarURL: imageSrc }));
  };

  const nxt = () => {
    nav("/bgav");
  };
  const backbtn = () => {
    nav(-1);
  };
  const handleShowBG = () => {
    setshowbg(!showbg);
  };

  return (
    <div className="Avatar">
      <h1>Choose Avatar</h1>
      <div className="nxtbtn">
        <button className="nxt" onClick={backbtn}>
          Back
        </button>
        <button className="nxt" onClick={nxt}>
          Next
        </button>
      </div>
      {/* {selectedImage && ( */}
      <div className="selimagex">
        <h2>Selected Image:</h2>
        <div
          className="bgimg"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={selectedImage}
            className="selimage"
            // alt="Selected"
          />
        </div>
      </div>
      <div className="btnav">
        <button className="btnavtr" onClick={handleShowAnimals}>
          Animal
        </button>
        <button className="btnavtr" onClick={handleShowHumans}>
          Human
        </button>
        <button className="btnavtr" onClick={handleShowBG}>
          Background
        </button>
      </div>
      <div className="avatar-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {!showbg && <ul className="filter">
              {(showAnimals ? animalList : humanList).map((item) => (
                <div
                  key={item.id}
                  className="avatar-item"
                  onClick={() => handleImageClick(item.image, item)}
                >
                  <img src={item.image} className="img" alt={item.name} />
                </div>
              ))}
            </ul>}
            {showbg && <BgAvatar />}
          </>
        )}
      </div>
    </div>
  );
}

export default Avatar2;

export const BgAvatar = () => {
  const { data, loading, selectedImage } = useSelector((state) => state.avatar);

  const [background, setBackground] = useState("");

  return (
    <div>
      <>
        <ul className="filter">
          {data.map(
            (
              item // Use 'data' directly instead of 'showAnimals' or 'showHumans'
            ) => (
              <div
                key={item.id}
                className="avatar-item"
                onClick={() => handleImageClick(item.image, item)}
              >
                <img src={item.image} className="img" alt={item.name} />
              </div>
            )
          )}
        </ul>
      </>
    </div>
  );
};
