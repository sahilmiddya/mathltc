// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./avatar.css";

// function Avatar() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [filterType, setFilterType] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image
//   const [backgroundImage, setBackgroundImage] = useState(null); // New state for background image URL
//   // const [backgroundImage, setBackgroundImage] = useState(null); // New state for background image URL

//   useEffect(() => {
//     const apiUrl = "http://13.40.14.168/accounts/avatar/list"; // Replace with your API URL

//     axios
//       .get(apiUrl)
//       .then((response) => {
//         setData(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         setLoading(false);
//       });

//     // .............................
//     const backgroundApiUrl = "http://13.40.14.168/accounts/background/list"; // Replace with your API URL for background image

//     axios
//       .get(backgroundApiUrl)
//       .then((response) => {
//         setBackgroundImage(response.data); // Assuming the API returns an object with a "url" property
//       })
//       .catch((error) => {
//         console.error("Error fetching background image:", error);
//       });
//   }, []);


//   const handleFilter = (type) => {
//     setFilterType(type);
//   };

//   const filteredData = data.filter((item) => {
//     return filterType === "human"
//       ? item.avatar_type === "human"
//       : item.avatar_type === "animal";
//   });
//   const handleImageClick = (img) => {
//     setSelectedImage(img);
//   };

//   return (
//     <div
//       className="Avatar"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <>
//           <div>
//             {/* <h1>heelo</h1> */}
//             {selectedImage && (
//               <div className="selimagex">
//                 <h2>Selected Image: </h2>
//                 <img src={selectedImage} className="selimage" alt="Selected" />
//               </div>
//             )}
//             <div className="btnav">
//               <button
//                 className="btnavtr"
//                 onClick={() => handleFilter("animal")}
//               >
//                 Animal
//               </button>
//               <button className="btnavtr" onClick={() => handleFilter("human")}>
//                 Human
//               </button>
//               <button className="btnavtr" onClick={() => handleFilter("bgc")}>
//                 Background
//               </button>
//             </div>
//             <ul className="filter">
//               {filteredData.map((item) => (
//                 <div key={item.id} onClick={() => handleImageClick(item.image)}>
//                   <img src={item.image} className="img" alt={item.name} />
//                   {/* <li key={item.id}>{item.name}</li> */}
//                 </div>
//               ))}
//             </ul>
//           </div>
//           {/* bgimg  */}

//           <ul className="filter">
//             {backgroundImage.map((item) => (
//               <div key={item.id} onClick={() => handleImageClick(item.image)}>
//                 <img src={item.image} className="img" alt={item.name} />
//                 <li key={item.id}>{item.name}</li>
//               </div>
//             ))}
//           </ul>
//         </>
//       )}
//     </div>
//   );
// }

// export default Avatar;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./avatar.css";

function Av2() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [animalList, setAnimalList] = useState([]); // Storing filtered animal list
  const [humanList, setHumanList] = useState([]);   // Storing filtered human list
  const [showAnimals, setShowAnimals] = useState(false);
  const [showHumans, setShowHumans] = useState(false);

  useEffect(() => {
    const apiUrl = "http://13.40.14.168/accounts/avatar/list"; // Replace with your API URL

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        setLoading(false);

        // Filter animal and human lists
        const animals = response.data.filter((item) => item.avatar_type === "animal");
        const humans = response.data.filter((item) => item.avatar_type === "human");
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

  return (
    <div className="Avatar">
      <h1>API Data</h1>
      <div>
        <button onClick={handleShowAnimals}>Animal</button>
        <button onClick={handleShowHumans}>Human</button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {showAnimals &&
            animalList.map((item) => (
              <div key={item.id}>
                <img src={item.image} className="img" alt={item.name} />
                <li key={item.id}>{item.name}</li>
              </div>
            ))}
          {showHumans &&
            humanList.map((item) => (
              <div key={item.id}>
                <img src={item.image} className="img" alt={item.name} />
                <li key={item.id}>{item.name}</li>
              </div>
            ))}
        </ul>
      )}
    </div>
  );
}

export default Av2;
