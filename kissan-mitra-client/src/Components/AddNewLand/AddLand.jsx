import React, { useEffect, useState } from "react";
import "./AddLand.css";
import {
  Autocomplete,
  GoogleMap,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";

const AddLand = () => {
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  useEffect(() => {
    if (map && markerLoc) {
      map.panTo(markerLoc);
      // console.log(setZ)
      // map.setZoom(13);
    }
  }, [onPlaceChanged]);
  const [markerLoc, setMarkerLoc] = useState(null);
  const [searchResult, setSearchResult] = useState("");
  const [libraries] = useState(["places"]);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLEMAP_API_KEY,
    libraries,
  });

  if (!isLoaded) {
    return "Map is Loading";
  }

  function onLoad(autocomplete) {
    setSearchResult(autocomplete);
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
      alert("Please Select from the list below.");
    }
  }

  return (
    <div className="addLand">
      <div className="addLandForm">
        <h1>Add Your Field</h1>
        <form action="">
          <label htmlFor="fieldName-addland">Enter Name</label>
          <input
            id="fieldName-addland"
            type="text"
            placeholder="Enter the name of the Field"
          />
          <label htmlFor="area-addland">Area in Acres</label>
          <input type="text" id="area-addland" placeholder="Enter the area" />
          <label htmlFor="type-addfield">Field Type</label>
          <input type="text" id="type-addfield" placeholder="Field Type" />
          <label htmlFor="location-addland">Location</label>
          <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
            <input
              type="text"
              id="location-addland"
              placeholder="Enter the Locality and select on the map."
            />
          </Autocomplete>
          <label htmlFor="discription-addland">Description</label>
          <textarea
            name="description-addland"
            id="discription-addland"
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit" onClick={(e)=>{
            e.preventDefault();
          }}>Add Land</button>
        </form>
      </div>
      <GoogleMap
        center={{ lat: 26.846098, lng: 80.946 }}
        zoom={4}
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
              position={markerLoc}
              onPositionChanged={(e) => {
                console.log("inside pan");
                console.log(markerLoc);
              }}
            />
          </>
        )}
        {console.log(markerLoc)}
      </GoogleMap>
    </div>
  );
};

export default AddLand;
