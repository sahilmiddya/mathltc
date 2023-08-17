// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import "./avatar.css";

// // function Av3() {
// //   const [data, setData] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [animalList, setAnimalList] = useState([]);
// //   const [humanList, setHumanList] = useState([]);
// //   const [showAnimals, setShowAnimals] = useState(false);
// //   const [showHumans, setShowHumans] = useState(false);
// //   const [selectedImage, setSelectedImage] = useState(null);
// //   const [backgroundImage, setBackgroundImage] = useState(null);

// //   useEffect(() => {
// //     const apiUrl = "http://13.40.14.168/accounts/avatar/list";

// //     axios
// //       .get(apiUrl)
// //       .then((response) => {
// //         setData(response.data);
// //         setLoading(false);

// //         const animals = response.data.filter(
// //           (item) => item.avatar_type === "animal"
// //         );
// //         const humans = response.data.filter(
// //           (item) => item.avatar_type === "human"
// //         );
// //         setAnimalList(animals);
// //         setHumanList(humans);
// //       })
// //       .catch((error) => {
// //         console.error("Error:", error);
// //         setLoading(false);
// //       });

// //     const backgroundApiUrl = "http://13.40.14.168/accounts//background/list";

// //     axios
// //       .get(backgroundApiUrl)
// //       .then((response) => {
// //         setBackgroundImage(response.data.url);
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching background image:", error);
// //       });
// //   }, []);

// //   const handleShowAnimals = () => {
// //     setShowAnimals(true);
// //     setShowHumans(false);
// //   };

// //   const handleShowHumans = () => {
// //     setShowAnimals(false);
// //     setShowHumans(true);
// //   };

// //   const handleImageClick = (imageSrc) => {
// //     setSelectedImage(imageSrc);
// //   };

// //   const handleChangeBackground = () => {
// //     // Fetch the new background image URL from your API
// //     // Update the "backgroundImage" state with the new URL
// //   };

// //   const containerStyle = {
// //     backgroundImage: `url(${backgroundImage})`,
// //   };

// //   return (
// //     <div className="Avatar" style={containerStyle}>
// //       <h1>API Data</h1>
// //       {selectedImage && (
// //         <div className="selimagex">
// //           <h2>Selected Image:</h2>
// //           <img src={selectedImage} className="selimage" alt="Selected" />
// //         </div>
// //       )}
// //       <div className="btnav">
// //         <button className="btnavtr" onClick={handleShowAnimals}>
// //           Animal
// //         </button>
// //         <button className="btnavtr" onClick={handleShowHumans}>
// //           Human
// //         </button>
// //         <button className="btnavtr" onClick={handleChangeBackground}>
// //           Background
// //         </button>
// //       </div>
// //       <div className="avatar-container">
// //         {loading ? (
// //           <p>Loading...</p>
// //         ) : (
// //           <ul className="filter">
// //             {(showAnimals ? animalList : humanList).map((item) => (
// //               <div
// //                 key={item.id}
// //                 className="avatar-item"
// //                 onClick={() => handleImageClick(item.image)}
// //               >
// //                 <img src={item.image} className="img" alt={item.name} />
// //               </div>
// //             ))}
// //           </ul>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Av3;

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
  const [selectedImage, setSelectedImage] = useState(null);
  const [backgroundImages, setBackgroundImages] = useState([]); // New state for background images
  const [showBackgrounds, setShowBackgrounds] = useState(false);
  console.log({ backgroundImages });

  // useEffect(() => {
  //   if (showBackgrounds) {
  //     const backgroundApiUrl = "http://13.40.14.168/accounts/background/list";

  //     axios
  //       .get(backgroundApiUrl)
  //       .then((response) => {
  //         setBackgroundImages(response.data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching background images:", error);
  //       });
  //   }
  // }, [showBackgrounds]);

  useEffect(() => {
    const apiUrl = "http://13.40.14.168/accounts/avatar/list";

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

  useEffect(() => {
    const backgroundApiUrl = "http://13.40.14.168/accounts/background/list";

    axios
      .get(backgroundApiUrl)
      .then((response) => {
        setBackgroundImages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching background image:", error);
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

  const handleShowBackgrounds = () => {
    setShowBackgrounds(true);
    setShowAnimals(false);
    setShowHumans(false);
  };

  const handleBackgroundImageClick = (imageSrc) => {
    setBackgroundImages(imageSrc);
  };

  return (
    <div
      className="Avatar"
      // style={containerStyle}
    >
      <h1>API Data</h1>
      {selectedImage && (
        <div className="selimagex" 
        // style={{backgroundImage:`url(${})`}}
        >
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
        <button className="btnavtr" onClick={handleShowBackgrounds}>
          Background
        </button>

        {/* {showBackgrounds && (
          <div className="background-container">
            {backgroundImages.map((image) => (
              <div
                key={image.id}
                className="background-item"
                onClick={() => handleBackgroundImageClick(image.url)}
              >
                <img
                  src={image.url}
                  className="background-image"
                  alt={`Background ${image.id}`}
                />
              </div>
            ))}
          </div>
        )} */}
      </div>
      <div className="avatar-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="filter">
            {(showHumans ? humanList : animalList).map((item) => (
              <div
                key={item.id}
                className="avatar-item"
                onClick={() => handleImageClick(item.image)}
              >
                <img src={item.image} className="img" alt={item.name} />
              </div>
            ))}
          </ul>
        )}

        {/* {showBackgrounds && (
          <div className="background-container">
            {backgroundImages?.map?.((image) => (
              <div
                key={image.id}
                className="background-item"
                onClick={() => handleBackgroundImageClick(image)}
              >
                <img
                  src={image.image}
                  className="background-image"
                  // alt={`Background ${image.id}`}
                  style={{
                    height: "100px",
                  }}
                />
              </div>
            ))}
          </div>
        )} */}
      </div>
    </div>
  );
}

export default Av3;
