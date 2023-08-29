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

  const [backgroundURL, setBackgroundURL] = useState("");

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

  const handleShowAnimals = () => {
    setshowbg(false);
    dispatch(setShowAnimals());
  };

  const handleShowHumans = () => {
    setshowbg(false);
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
    setshowbg(true);
  };

  return (
    <div className="Avatar" style={{ maxHeight: "90vh", overflowY: "auto" }}>
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
            backgroundImage: `url(${backgroundURL})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "100% 100% 100% 100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 150,
            width: 150,
            borderRadius: "50%",
          }}
        >
          <img
            src={selectedImage}
            className="selimage"
            style={{
              height: "70%",
            }}
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
            {!showbg && (
              <ul className="filter">
                {(showAnimals ? animalList : humanList).map((item) => (
                  <div
                    key={item.id}
                    className="avatar-item"
                    onClick={() => handleImageClick(item.image, item)}
                  >
                    <img src={item.image} className="img" alt={item.name} />
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
    // console.log(bgapiUrl +"gbgbgbngnb");
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
