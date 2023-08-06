import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import CropPage from "../CropPage/CropPage";
import "./Cropcard.css";

const Cropcard = () => {
  const [crppagePopup, setcrppagePopup] = useState();

  const [landArea, setlandArea] = useState(null);

  

  const [allCropData,setAllCropData] = useState([]);

  const fetchallsimilarCropData = async ()=>{
    const fetchedData = await axios.post("http://localhost:5000/api/allcropdata",{id:Cookies.get("id")});
    setAllCropData(fetchedData.data);
  }

  useEffect(()=>{
    fetchallsimilarCropData();
  },[]);

  
  const divideCrops = ()=>{
    if(allCropData){
      var tempData = {};
      allCropData.forEach((ele)=>{
        if(tempData[ele.cropName]===null || tempData[ele.cropName]===undefined){
          // console.log(ele);
          tempData[ele.cropName] = ele.land_area;
        }else{
          tempData[ele.cropName]+=ele.land_area;
        }
      })
      if(Object.keys(tempData).length !== 0)
        {setlandArea(tempData)}

    }
  }
  
  useEffect(()=>{
    divideCrops();
  },[allCropData])

  return (
    <>
      {crppagePopup && (
        <CropPage
          setcrppagePopup={setcrppagePopup}
          crppagePopup={crppagePopup}
          allCropData={allCropData}
        />
      )}
      <div className="cropCard-container">
        <div className="headingcropcard">
          <div>Cropwise Yield</div>
        </div>
        <div className="cropcard-details-container">{landArea?<>
          {Object.keys(landArea).map((data, index) => {
            return (
              <div
                className="cropcard-details"
                onClick={() => {
                  setcrppagePopup({"data":data,"area":landArea[data]});
                }}
                key={index}
              >
                <div className="cropname-corpcard">{data}</div>
                <div className="totalarea-cropcard">{landArea[data]} Acres</div>
                <div className="circle"></div>
              </div>
            );
          })}</>:<><h1> No crop Found! Please go to any land and add crop! </h1>
          </>}
        </div>
      </div>
    </>
  );
};

export default Cropcard;
