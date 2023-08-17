import React, { useState, useEffect } from "react";
import axios from "axios";
import "./avatar.css";

function Avatar() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image

  useEffect(() => {
    const apiUrl = "http://13.40.14.168/accounts/avatar/list"; // Replace with your API URL

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  console.log(data);

  const handleFilter = (type) => {
    setFilterType(type);
  };

  const filteredData = data.filter((item) => {
    return filterType === "human"
      ? item.avatar_type === "human"
      : item.avatar_type === "animal";
  });
  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  return (
    <div className="Avatar">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
            {/* <h1>heelo</h1> */}
            {selectedImage && (
              <div className="selimagex">
                <h2>Selected Image: </h2>
                <img src={selectedImage} className="selimage" alt="Selected" />
              </div>
            )}
            <div className="btnav">
              <button
                className="btnavtr"
                onClick={() => handleFilter("animal")}
              >
                Animal
              </button>
              <button className="btnavtr" onClick={() => handleFilter("human")}>
                Human
              </button>
            </div>
            <ul className="filter">
              {filteredData.map((item) => (
                <div key={item.id} onClick={() => handleImageClick(item.image)}>
                  <img src={item.image} className="img" alt={item.name} />
                  {/* <li key={item.id}>{item.name}</li> */}
                </div>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default Avatar;

// const filteredData = filterType
//   ? data.filter((item) => item.avatar_type === filterType)
//   : data;

// const filteredData = filterType
//   ? data.filter((item) => item.type === filterType)
//   : data;

// const filteredData = data.filter((item) => {
//   return filterType === "animal" ? item.avatar_type === "animal" : true;
