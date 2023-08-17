import React, { useState, useEffect } from "react";
import axios from "axios";
import "./avatar.css";

function Av3() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [animalList, setAnimalList] = useState([]);
  const [humanList, setHumanList] = useState([]);
  const [showAnimals, setShowAnimals] = useState(false);
  const [showHumans, setShowHumans] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image URL

  useEffect(() => {
    const apiUrl = "http://13.40.14.168/accounts/avatar/list"; // Replace with your API URL

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        setLoading(false);

        const animals = response.data.filter(
          (item) => item.avatar_type === "animal"
        );
        const humans = response.data.filter(
          (item) => item.avatar_type === "human"
        );
        setAnimalList(animals);
        setHumanList(humans);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  const handleShowAnimals = () => {
    setShowAnimals(true);
    setShowHumans(false);
  };

  const handleShowHumans = () => {
    setShowAnimals(false);
    setShowHumans(true);
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return (
    <div className="Avatar">
      <h1>API Data</h1>
      {selectedImage && (
        <div className="selimagex">
          <h2>Selected Image:</h2>
          <img src={selectedImage} className="selimage" alt="Selected" />
        </div>
      )}
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
                  onClick={() => handleImageClick(item.image)}
                >
                  <img src={item.image} className="img" alt={item.name} />
                  {/* <li>{item.name}</li> */}
                </div>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Av3;
