import React, { useEffect, useState } from "react"; // Import useState
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setData, setSelectedImage } from "../store/avatarSlice"; // Update the path to your avatarSlice

import "./avatar.css";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../constants/baseURL";
import { setstate } from "../store/regFlowslice";

function Bgav() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { data, loading, selectedImage } = useSelector((state) => state.avatar);

  const [background, setBackground] = useState("");

  console.log({ background });

  const [showSelectedImage, setShowSelectedImage] = useState(false); // New state
  console.log(selectedImage);
  useEffect(() => {
    const apiUrl = `${baseURL}/accounts/background/list`;

    axios
      .get(apiUrl)
      .then((response) => {
        dispatch(setData(response.data));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [dispatch]);

  const handleImageClick = (imageSrc, background) => {
    // dispatch(setSelectedImage(imageSrc));
    setShowSelectedImage(true); // Show the selected image
    setBackground(imageSrc);
    dispatch(setstate({ background: background?.id }));
  };

  const handleCloseSelectedImage = () => {
    setShowSelectedImage(false); // Hide the selected image
  };
  const bgback = () => {
    nav(-1);
  };
  const bgnxt = () => {
    nav("/hear");
  };

  return (
    <div className="Avatar">
      <h1>Choose Background:</h1>
      <div className="nxtbtn">
        <button className="nxt" onClick={bgback}>
          Back
        </button>
        <button className="nxt" onClick={bgnxt}>
          Next
        </button>
      </div>{" "} 
      <div className="selimagex" onClick={handleCloseSelectedImage}>
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
            style={{
              height: "80%",
              marginTop: 20,
            }}
          />
        </div>
      </div>
      
      <div className="avatar-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
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
        )}
      </div>
    </div>
  );
}

export default Bgav;
