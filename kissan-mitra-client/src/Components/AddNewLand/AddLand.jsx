import React, { useState } from "react";
import "./AddLand.css";
// import env from dotenv;

import { GoogleMap, InfoWindow, useJsApiLoader } from "@react-google-maps/api";

const AddLand = () => {
  const [mapCenter, setmapCenter] = useState("");
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.GOOGLEMAP_API_KEY,
  });

  if (!isLoaded) {
    return "Map is Loading";
  }

  return (
    <div className="addLand">
        {process.env.INST}
      
      <div className="addLandForm">
        field type <br />
        area map <br />
        field name <br />
        field description <br />
        irrigation available or not
      </div>
      <GoogleMap
        center={{ lat: 26.846098, lng: 80.946 }}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        onLoad={(map) => setMap(map)}
      ></GoogleMap>
    </div>
  );
};

export default AddLand;
