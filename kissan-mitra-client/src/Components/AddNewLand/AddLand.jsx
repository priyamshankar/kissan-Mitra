import React, { useEffect, useState } from "react";
import "./AddLand.css";
import axios from "axios";
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
  // const [formData,setFormData] = useState({
  //   firstName : '',
  //   lastName : '',

  // })

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


  //DELETE THE BELOW COMMENT BEFORE PRODUCTION SINCE USELESS
  // function createPost() {
  //   axios
  //     .post("http://localhost:5000/api/test", {
  //       title: "Hello World!",
  //       body: "This is a new post."
  //     })
  //     .then((res) => {
  //       // setPost(response.data);
  //       console.log(res.data);
  //     });
  // }

  return (
    <div className="addLand">
      <div className="addLandForm">
        <h1>Add Your Field</h1>
        <div className="h-rule">
        <hr />
        <span>.</span>
        <hr />
        </div>
        <form action="">
          <div>
            <label htmlFor="fieldName-addland">Enter Name</label>
            <input
              id="fieldName-addland"
              type="text"
              placeholder="Enter the name of the Field"
            />
          </div>
          <div>
            <label htmlFor="area-addland">Area in Acres</label>
            <input
              type="number"
              id="area-addland"
              placeholder="Enter the area"
            />
          </div>
          <div>
            <label htmlFor="type-addfield">Field Type</label>
            <input type="text" id="type-addfield" placeholder="Field Type" />
          </div>
          <div className="autocompleteInput">
            <label htmlFor="location-addland">Location</label>
            <Autocomplete
              id="location-addland"
              onPlaceChanged={onPlaceChanged}
              onLoad={onLoad}
            >
              <input
                type="text"
                placeholder="Enter the Locality and select on the map."
              />
            </Autocomplete>
          </div>
          <div className="grid-row-desc">
            <label htmlFor="discription-addland">Description</label>
            <textarea
              name="description-addland"
              id="discription-addland"
              cols="50"
              rows="5"
            ></textarea>
          </div>
          <div className="btns-addland">
            <button
              className="submit-btn"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Cancel
            </button>
            <button
              className="submit-btn"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                // createPost();
              }}
            >
              Add Land
            </button>
          </div>
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
