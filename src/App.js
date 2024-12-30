import React, { useState } from "react";
import { useGeolocated } from "react-geolocated";

const App = () => {
  const [record, setRecord] = useState(null);

  
  const { coords, getPosition } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  });

  const recordBirthDetails = () => {
    const currentTime = new Date().toLocaleString();
    const location = coords
      ? { latitude: coords.latitude, longitude: coords.longitude }
      : { latitude: "Unavailable", longitude: "Unavailable" };

    setRecord({
      time: currentTime,
      location,
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Baby Birth Recorder</h1>
      <button
        onClick={() => {
          getPosition();
          recordBirthDetails(); 
        }}
        style={{ padding: "10px 20px" }}
      >
        Record Birth Time
      </button>
      {record && (
        <div style={{ marginTop: "20px" }}>
          <p>
            <strong>Recorded Time:</strong> {record.time}
          </p>
          <p>
            <strong>Location:</strong> Latitude: {record.location.latitude}, Longitude:{" "}
            {record.location.longitude}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;