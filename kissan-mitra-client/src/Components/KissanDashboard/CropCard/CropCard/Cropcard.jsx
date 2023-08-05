import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import CropPage from "../CropPage/CropPage";
import "./Cropcard.css";

const Cropcard = () => {
  const [crppagePopup, setcrppagePopup] = useState(null);

  const [landArea, setlandArea] = useState([
    {
      cropType: "rice",
      val: 2.5,
    },
    {
      cropType: "sunflower",
      val: 3.4,
    },
    {
      cropType: "pulse",
      val: 1,
    },
    {
      cropType: "wheat",
      val: 3,
    },
  ]);

  

  const [allCropData,setAllCropData] = useState([]);

  const fetchallsimilarCropData = async ()=>{
    const fetchedData = await axios.post("http://localhost:5000/api/allcropdata",{id:Cookies.get("id")});
    setAllCropData(fetchedData.data);
  }

  useEffect(()=>{
    fetchallsimilarCropData();
  },[])


  return (
    <>
      {crppagePopup && (
        <CropPage
          setcrppagePopup={setcrppagePopup}
          crppagePopup={crppagePopup}
        />
      )}
      <div className="cropCard-container">
        <div className="headingcropcard">
          <div>Cropwise Yield</div>
        </div>
        <div className="cropcard-details-container">
          {landArea.map((data, index) => {
            return (
              <div
                className="cropcard-details"
                onClick={() => {
                  setcrppagePopup(data.cropType);
                }}
                key={index}
              >
                <div className="cropname-corpcard">{data.cropType}</div>
                <div className="totalarea-cropcard">{data.val} Acres</div>
                <div className="circle"></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cropcard;
