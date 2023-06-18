import React, { useEffect, useState } from "react";
import "./AddLand.css";
import {
  Autocomplete,
  GoogleMap,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";

const AddLand = () => {
  const [markerLoc, setMarkerLoc] = useState(null);
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [searchResult, setSearchResult] = useState("");
  const [libraries] = useState(["places"]);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLEMAP_API_KEY,
    libraries,
  });

  if (!isLoaded) {
    return "Map is Loading";
  }
//   useEffect(() => {
//     map.panTo(markerLoc);

//   }, [onPlaceChanged])

  function onLoad(autocomplete) {
    setSearchResult(autocomplete);
    if(map || markerLoc)
    map.panTo(markerLoc);

  }
  function onPlaceChanged() {
    if (searchResult != null) {
      const place = searchResult.getPlace();
      if (!place.geometry) {
        alert("Choose from the options.");
        return;
      }
      let lat = place.geometry.location.lat();
      let lng = place.geometry.location.lng();
      setMarkerLoc({
        lat: lat,
        lng: lng,
      });
    } else {
      alert("Please enter text");
    }
  }

  return (
    <div className="addLand">
      <div className="addLandForm">
        field type <br />
        area map <br />
        field name <br />
        field description <br />
        irrigation available or not
        <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
          <input type="text" placeholder="search for the location" />
        </Autocomplete>
      </div>
      <GoogleMap
        center={{ lat: 26.846098, lng: 80.946 }}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        onLoad={(map) => setMap(map)}
        onClick={(map) => {
          let lat = map.latLng.lat();
          let lng = map.latLng.lng();
          setMarkerLoc({
            lat: lat,
            lng: lng,
          });
        }}
        clickableIcons={false}
      >
        {markerLoc === null ? (
          <></>
        ) : (
          <>
            <MarkerF
              onPositionChanged={(e) => {
                // map.panTo(markerLoc);
                console.log(markerLoc);
              }}
              position={markerLoc}
            />
          </>
        )}
        {console.log(markerLoc)}

      </GoogleMap>
    </div>
  );
};

export default AddLand;
