import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  setData,
  setShowAnimals,
  setShowHumans,
  setSelectedImage,
} from "../store/avatarSlice"; // Update the path to your avatarSlice

import "./avatar.css";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../constants/baseURL";
import { setstate } from "../store/regFlowslice";

function Avat4() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const {
    data,
    loading,
    animalList,
    humanList,
    showAnimals,
    showHumans,
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
        <img
          src={selectedImage}
          className="selimage"
          // alt="Selected"
        />
      </div>
      {/* )} */}
      <div className="btnav">
        <button className="btnavtr" onClick={handleShowAnimals}>
          Animal
        </button>
        <button className="btnavtr" onClick={handleShowHumans}>
          Human
        </button>
      </div>
      <div className="avatar-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}

export default Avat4;
